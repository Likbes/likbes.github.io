/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { hot } from 'react-hot-loader';
import style from './app.scss';

class CurrData extends React.Component {
  render() {
    const {
      latitude,
      longitude,
      timestamp,
      natural,
      velocityKM,
      velocityMPH,
    } = this.props;
    return (
      <>
        <h1 className={style.title}>Current Data on the ISS:</h1>
        <table className={style.table}>
          <tr>
            <td className={style.tableProperty}>Current Latitude:</td>
            <td className={style.tableValue}>{latitude}</td>
          </tr>
          <tr>
            <td className={style.tableProperty}>Current Longitude:</td>
            <td className={style.tableValue}>{longitude}</td>
          </tr>
          <tr>
            <td className={style.tableProperty}>Current Timestamp(unix):</td>
            <td className={style.tableValue}>{timestamp}</td>
          </tr>
          <tr>
            <td className={style.tableProperty}>
              Current Timestamp (natural):
            </td>
            <td className={style.tableValue}>{natural}</td>
          </tr>
          <tr>
            <td className={style.tableProperty}>Estimated Velocity (km/h):</td>
            <td className={style.tableValue}>{velocityKM}</td>
          </tr>
          <tr>
            <td className={style.tableProperty}>Estimated Velocity (mph):</td>
            <td className={style.tableValue}>{velocityMPH}</td>
          </tr>
        </table>
      </>
    );
  }
}

export default hot(module)(CurrData);
