/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { hot } from 'react-hot-loader';
import DisplayWeather from './DisplayWeather';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currLat: '',
      currLon: '',
      city: '',
      country: '',
      temp: '',
      tempCategory: 'Celsius',
      currTempK: '',
      currTempF: '',
      currTempC: '',
      weatherMain: '',
      weatherDetail: '',
      icon: '',
      display: 'none',
    };
    this.handleCelsius = this.handleCelsius.bind(this);
    this.handleFaren = this.handleFaren.bind(this);
    this.handleKelvin = this.handleKelvin.bind(this);
  }

  componentDidMount() {
    this.getLocation();
  }

  getLocation() {
    const key = '95cb98c3bced54804a8a4847c8021eeaf83e12ae57c49704500c6a1c';
    fetch(`https://api.ipdata.co/?api-key=${key}`)
      .then(data => data.json())
      .then(data => {
        this.setState({
          currLat: data.latitude.toFixed(2),
          currLon: data.longitude.toFixed(2),
          city: data.city,
          country: data.country_name,
        });
      })
      .then(this.getWeather.bind(this));
  }

  getWeather() {
    const key = '68430ea893f4619fe948159fb4637321';
    const { currLon, currLat } = this.state;
    if (currLat === '') return;
    // eslint-disable-next-line max-len
    const url = `https://api.openweathermap.org/data/2.5/weather?lon=${currLon}&lat=${currLat}&appid=68430ea893f4619fe948159fb4637321`;
    fetch(url)
      .then(data => data.json())
      .then(data => {
        const { temp } = data.main;
        const tempC = (temp - 273.15).toFixed(2);
        const tempF = (tempC * 1.8 + 32).toFixed(2);
        this.setState({
          temp: `${tempC}°C`,
          currTempK: `${temp}K`,
          currTempC: `${tempC}°C`,
          currTempF: `${tempF}°F`,
          weatherMain: data.weather[0].main,
          weatherDetail: data.weather[0].description,
          display: 'block',
        });
      })
      .then(this.getLogo.bind(this));
  }

  getLogo() {
    const { weatherDetail: cond } = this.state;
    if (cond === 'clear sky') {
      this.setState({
        icon:
          'http://i1361.photobucket.com/albums/r662/bonham000/Current%20Weather%20App/sun_zps5alfhawb.png',
      });
    } else if (
      cond === 'few clouds' ||
      cond === 'scattered clouds' ||
      cond === 'broken clouds'
    ) {
      this.setState({
        icon:
          'http://i1361.photobucket.com/albums/r662/bonham000/Current%20Weather%20App/clouds_zpsimfgky1h.png',
      });
    } else if (cond === 'shower rain' || cond === 'rain') {
      this.setState({
        icon:
          'http://i1361.photobucket.com/albums/r662/bonham000/Current%20Weather%20App/rain_zpsd8iqh9we.png',
      });
    } else if (cond === 'thunderstorm') {
      this.setState({
        icon:
          'http://i1361.photobucket.com/albums/r662/bonham000/Current%20Weather%20App/storm_zpsapxffwwd.png',
      });
    } else {
      this.setState({
        icon:
          'http://i1361.photobucket.com/albums/r662/bonham000/Current%20Weather%20App/clouds_zpsimfgky1h.png',
      });
    }
    this.forceUpdate();
  }

  handleKelvin() {
    this.setState(prev => {
      return {
        temp: prev.currTempK,
        tempCategory: 'Kelvin',
      };
    });
  }

  handleFaren() {
    this.setState(prev => {
      return {
        temp: prev.currTempF,
        tempCategory: 'Faren',
      };
    });
  }

  handleCelsius() {
    this.setState(prev => {
      return {
        temp: prev.currTempC,
        tempCategory: 'Celsius',
      };
    });
  }

  render() {
    return (
      <DisplayWeather
        {...this.state}
        setFaren={this.handleFaren}
        setCelsius={this.handleCelsius}
        setKelvin={this.handleKelvin}
      />
    );
  }
}

export default hot(module)(Weather);
