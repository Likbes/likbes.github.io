import React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import style from './weather.scss';

const DisplayWeather = ({
  display,
  currLat,
  currLon,
  setCelsius,
  setFaren,
  setKelvin,
  weatherMain,
  weatherDetail,
  icon,
  city,
  country,
  tempCategory,
  temp,
}) => {
  return (
    <div style={{ display }}>
      <h1 className={style.title}>Current Weather Service</h1>
      <p className={style.conditions}>The current weather conditions are:</p>
      <p className={style.weather}>
        {weatherMain}, {weatherDetail}
      </p>
      <img src={icon} alt="icon" />
      <p className={style.temperature}>{temp}</p>
      <div className={style.toggleTemp}>
        <button
          onClick={setKelvin}
          type="button"
          className={style.resetBtn}
          style={{ color: tempCategory === 'Kelvin' ? '#f94e3f' : '#3f4040' }}
        >
          Kelvin
        </button>
        <button
          onClick={setCelsius}
          type="button"
          className={style.resetBtn}
          style={{ color: tempCategory === 'Celsius' ? '#f94e3f' : '#3f4040' }}
        >
          Celsium
        </button>
        <button
          onClick={setFaren}
          type="button"
          className={style.resetBtn}
          style={{ color: tempCategory === 'Faren' ? '#f94e3f' : '#3f4040' }}
        >
          Farenheit
        </button>
      </div>
      <div className={style.data}>
        <p className={style.coordinates}>
          Your coordinates are: {currLat}, {currLon}
        </p>
        <p className={style.city}>
          Your location: {city}, {country}
        </p>
      </div>
    </div>
  );
};

DisplayWeather.propTypes = {
  display: PropTypes.string.isRequired,
  currLat: PropTypes.string.isRequired,
  currLon: PropTypes.string.isRequired,
  setCelsius: PropTypes.func.isRequired,
  setFaren: PropTypes.func.isRequired,
  setKelvin: PropTypes.func.isRequired,
  weatherMain: PropTypes.string.isRequired,
  weatherDetail: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  tempCategory: PropTypes.string.isRequired,
  temp: PropTypes.string.isRequired,
};

export default hot(module)(DisplayWeather);
