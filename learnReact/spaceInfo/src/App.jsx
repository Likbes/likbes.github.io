/* eslint-disable prettier/prettier */
/* eslint-disable class-methods-use-this */
/* eslint-disable func-names */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { hot } from 'react-hot-loader';
import style from './app.scss'
import People from './People';
import CurrData from './CurrData';
import Table from './Table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: -1,
      latitude: '',
      longitude: '',
      timestamp: '',
      natural: '',
      velocityKM: '',
      velocityMPH: '',
      table: [],
    };
  }

  componentWillMount() {
    fetch('http//api.open-notify.org/iss-now.json')
      .then(data => data.json())
      .then(data => {
        this.unix(data);
        this.setState({
          timestamp: data.timestamp,
          latitude: data.iss_position.latitude,
          longitude: data.iss_position.longitude,
        });
      });

    this.call();
  }

  getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = this.deg2rad(lat2 - lat1);
    const dLon = this.deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) *
      Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return d;
  }

  call() {
    setInterval(function () {
      const { latitude: currLat, longitude: currLon } = this.state;
      const position = [];
      position[0] = currLat;
      position[1] = currLon;

      fetch('http//api.open-notify.org/iss-now.json')
        .then(data => data.json())
        .then(data => {
          this.unix(data);
          const newLat = data.iss_position.latitude;
          const newLon = data.iss_position.longitude;
          position[2] = newLat;
          position[3] = newLon;
          const velocity = (this.getDistance(
            position[0],
            position[1],
            position[2],
            position[3]
          ) / 5) * 3600;
          this.setState(prevState => {
            return {
              timestamp: data.timestamp,
              latitude: data.iss_position.latitude,
              longitude: data.iss_position.longitude,
              velocityKM: (velocity).toString().substr(0, 5),
              velocityMPH: (velocity / 1.609344).toString().substr(0, 5),
              count: prevState.count + 1,
            };
          });
          this.setState(prevState => {
            return { table: [...prevState.table, prevState] };
          });
        });
    }.bind(this), 5000);
  }

  unix(data) {
    const unixTime = Number(data.timestamp);
    const date = new Date(unixTime * 1000);
    const hours = date.getHours();
    const minutes = `0${date.getMinutes()}`;
    const seconds = `0${date.getSeconds()}`;
    this.setState({
      natural: (`${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`)
        .toString().substr(0, 9),
    });
  }

  deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  render() {
    const { table } = this.state;
    return (
      <>
        <People />
        <CurrData {...this.state} />
        <Table table={table} />
        <p className={style.credits}>
          Data provided courtesy of
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://open-notify.org/Open-Notify-API/ISS-Location-Now/"
          >
            Open Notify
          </a> and refreshed every 5 seconds
        </p>
      </>
    );
  }
}

export default hot(module)(App);
