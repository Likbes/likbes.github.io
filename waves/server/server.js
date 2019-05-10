const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const app = express();
require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Modules
const { User } = require('./modules/user');
const { Brand } = require('./modules/brand');
const { Wood } = require('./modules/wood');
const { Product } = require('./modules/product');


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

const port = process.env.PORT || 3002;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server running at ${port}`);
});
