const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const formidable = require('express-formidable');
const cloudinary = require('cloudinary');

const app = express();
const mongoose = require('mongoose');
const async = require('async');
require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Modules
const { User } = require('./modules/user');
const { Brand } = require('./modules/brand');
const { Wood } = require('./modules/wood');
const { Product } = require('./modules/product');
const { Payment } = require('./modules/payment');
const { Site } = require('./modules/site');

// Middlewares
const { auth } = require('./middleware/auth');
const { admin } = require('./middleware/admin');

//=====================================
//                USERS
//=====================================

app.get('/api/users/auth', auth, (req, res) => {
  const { role, email, phone, name, lastname, cart, history } = req.user;
  res.status(200).json({
    role,
    email,
    phone,
    name,
    lastname,
    cart,
    history,
    isAdmin: role === 1,
    isAuth: true,
  });
});

app.post('/api/users/register', (req, res) => {
  const user = new User(req.body);

  user.save((err) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({
      success: true,
    });
  });

});

app.post('/api/users/login', (req, res) => {
  // find the email
  User.findOne({ 'email': req.body.email }, (err, user) => {
    if (!user) return res.json({
      loginSuccess: false,
      message: 'Auth failed, email not found',
    });

    // check password
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) return res.json({
        loginSuccess: false,
        message: 'Wrong password'
      });

      // generate a token
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.cookie('w_auth', user.token).status(200).json({
          loginSuccess: true,
        });
      });
    });
  });
});

app.get('/api/users/logout', auth, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id },
    { token: '' },
    (err) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).json({
        success: true,
      });
    }
  );
});

app.post('/api/users/updateProfile', auth, (req, res) => {
  const { _id } = req.user;

  User.findOneAndUpdate(
    { _id },
    {
      $set: req.body,
    },
    { new: true },
    err => {
      if (err) return res.json({ success: false, err });

      return res.status(200).send({
        success: true,

      });
    },
  );
});

// PRODUCT DETAIL

app.post('/api/users/uploadImage', auth, admin, formidable(), (req, res) => {
  cloudinary.uploader.upload(req.files.file.path, (result) => {
    const { public_id, url } = result;
    res.status(200).send({
      public_id, url
    });
  }, {
    public_id: `${Date.now()}`,
    resource_type: 'auto'
  });
});

app.get('/api/users/removeImage', auth, admin, (req, res) => {
  let { public_id } = req.query;
  cloudinary.uploader.destroy(public_id, (err) => {
    if (err) return res.json({ success: false });
    res.status(200).send('ok');
  });
});

// CART

app.post('/api/users/addToCart', auth, (req, res) => {
  const { _id } = req.user;
  const { productId } = req.query;

  User.findOne({ _id }, (err, doc) => {
    let duplicate = false;

    doc.cart.forEach(item => {
      if (item.id == productId) duplicate = true;
    });

    if (duplicate) {
      User.findOneAndUpdate(
        { _id, 'cart.id': mongoose.Types.ObjectId(productId) },
        { $inc: { 'cart.$.quantity': 1 } },
        { new: true },
        (err, doc) => {
          if (err) return res.json({ success: false, err });
          res.status(200).json(doc.cart);
        });
    } else {
      User.findOneAndUpdate(
        { _id },
        {
          $push: {
            cart: {
              id: mongoose.Types.ObjectId(productId),
              quantity: 1,
              date: Date.now(),
            },
          },
        },
        { new: true },
        (err, doc) => {
          if (err) return res.json({ success: false, err });
          res.status(200).json(doc.cart);
        });
    }
  });
});

app.get('/api/users/removeFromCart', auth, (req, res) => {
  const { _id } = req.user;
  const { productId } = req.query;

  User.findOneAndUpdate(
    { _id },
    {
      '$pull': {
        'cart': { 'id': mongoose.Types.ObjectId(productId) }
      }
    },
    { new: true },
    (err, doc) => {
      const { cart } = doc;
      const array = cart.map(item => {
        return mongoose.Types.ObjectId(item.id);
      });

      Product
        .find({ '_id': { $in: array } })
        .populate('brand')
        .populate('wood')
        .exec((err, cartDetail) => {
          return res.status(200).json({
            cartDetail,
            cart
          });
        });
    }
  );
});

// PAYPAL

app.post('/api/users/successBuy', auth, (req, res) => {

  const { cartDetail, paymentData } = req.body;
  const {
    _id: id, name, lastname, email, phone
  } = req.user;

  // user history 

  let history = [];
  let transactionData = {};

  cartDetail.forEach(({
    name,
    price,
    quantity,
    _id: id,
    brand,
  }) => {
    history.push({
      name, price, quantity, id,
      brand: brand.name,
      paymentId: paymentData.paymentId,
      dateOfPurchase: Date.now(),
    });
  });

  // payments dash
  transactionData.user = {
    id, name, lastname, email, phone
  };

  transactionData.data = paymentData;
  transactionData.product = history;

  User.findOneAndUpdate(
    { _id: id },
    { $push: { history }, $set: { cart: [] } },
    { new: true },
    err => {
      if (err) return res.json({ success: false, err });

      const payment = new Payment(transactionData);
      payment.save((err, doc) => {
        if (err) return res.json({ success: false, err });

        const { product } = doc;
        let products = [];

        product.forEach(({ id, quantity }) => {
          products.push({ id, quantity });
        });

        async.eachSeries(products, ({ id: _id, quantity }, cb) => {
          Product.update(
            { _id },
            {
              $inc: {
                'sold': quantity,
              }
            },
            { new: false },
            cb
          );
        }, (err) => {
          // after all
          if (err) return res.json({ success: false, err });

          res.status(200).json({
            success: true,
            cart: [],
            cartDetail: [],
          });
        });
      });
    },
  );
});

//=====================================
//                BRAND
//=====================================

app.post('/api/product/brand', auth, admin, (req, res) => {
  const brand = new Brand(req.body);

  brand.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({
      success: true,
      brand: doc,
    });
  });
});

app.get('/api/product/brands', (req, res) => {
  Brand.find({}, (err, brands) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(brands);
  });
});

//=====================================
//                WOODS
//=====================================

app.post('/api/product/wood', auth, admin, (req, res) => {
  const wood = new Wood(req.body);

  wood.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({
      success: true,
      wood: doc,
    });
  });
});

app.get('/api/product/woods', (req, res) => {
  Wood.find({}, (err, woods) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(woods);
  });
});

//=====================================
//                PRODUCTS
//=====================================

app.post('/api/product/shop', (req, res) => {
  const {
    order = 'desc',
    sortBy = '_id',
    limit = 100,
    skip = 0,
    filters
  } = req.body;

  const findArgs = {};

  for (let key in filters) {
    if (filters[key].length > 0) {
      if (key === 'price') {
        findArgs[key] = {
          $gte: filters[key][0],
          $lte: filters[key][1],
        };
      } else {
        findArgs[key] = filters[key];
      }
    }
  }

  findArgs['publish'] = true;

  Product
    .find(findArgs)
    .populate('brand')
    .populate('wood')
    .sort([[sortBy, order]])
    .skip(skip)
    .limit(limit)
    .exec((err, articles) => {
      if (err) return res.status(400).send(err);

      res.status(200).json({
        size: articles.length,
        articles,
      });
    });

  res.status(200);
});

app.post('/api/product/article', auth, admin, (req, res) => {
  const product = new Product(req.body);

  product.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({
      success: true,
      article: doc,
    });
  });
});

app.get('/api/product/articles_by_id', (req, res) => {
  let { type, id } = req.query;
  let items = id;

  if (type === 'array') {
    let ids = id.split(',');
    items = [];
    items = ids.map(item => {
      return mongoose.Types.ObjectId(item);
    });
  }

  Product
    .find({ '_id': { $in: items } })
    .populate('brand')
    .populate('wood')
    .exec((err, docs) => {
      return res.status(200).send(docs);
    });
});

// BY ARRIVAL
// /articles?sortBy=createdAt&order=desc&limit=4

// BY SELL
// /articles?sortBy=sold&order=desc&limit=4

app.get('/api/product/articles', (req, res) => {
  let { order = 'asc', sortBy = '_id', limit = 12 } = req.query;
  limit = parseInt(limit);

  Product
    .find()
    .populate('brand')
    .populate('wood')
    .sort([[sortBy, order]])
    .limit(limit)
    .exec((err, articles) => {
      if (err) return res.status(400).send(err);
      res.send(articles);
    });
});

//=====================================
//                SITE
//=====================================

app.get('/api/site/siteData', (req, res) => {
  Site.find({}, (err, site) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(site[0].siteInfo);
  });
});

app.post('/api/site/siteData', auth, admin, (req, res) => {

  Site.findOneAndUpdate(
    { name: 'Site' },
    {
      $set: { siteInfo: req.body },
    },
    { new: true },
    (err, doc) => {
      if (err) return res.status(400).send(err);
      return res.status(200).send({
        success: true,
        siteInfo: doc.siteInfo,
      });
    }
  );
}
);
const port = process.env.PORT || 3002;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server running at ${port}`);
});
