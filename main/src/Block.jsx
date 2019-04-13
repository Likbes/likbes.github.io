import React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './app.scss';

const Block = ({ name, descr, url, img }) => {
  const title = classNames({
    [style.name]: true,
    [style.longName]: name.length > 6,
  });
  return (
    <a href={url} className={style.block}>
      <div className={style.imgWrapper}>
        <img src={img} alt={name} />
        <h3 className={title}>{name}</h3>
        <p className={style.descr}>{descr}</p>
      </div>
    </a>
  );
};

Block.propTypes = {
  name: PropTypes.string.isRequired,
  descr: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default hot(module)(Block);
