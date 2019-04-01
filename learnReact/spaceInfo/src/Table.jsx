/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { hot } from 'react-hot-loader';
import style from './app.scss';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rowNum: 0,
    };
  }

  render() {
    const { table } = this.props;
    const { rowNum } = this.state;
    if (table.length === rowNum) return '';
    return (
      <table className={style.dataTable}>
        <tr className={style.tableHead}>
          <th>Count</th>
          <th>Latitude</th>
          <th>Longitude</th>
          <th>Unix Time</th>
          <th>Natural Time</th>
          <th>Velocity (km/h)</th>
          <th>Velocity (mph)</th>
        </tr>
        {table
          .slice(0)
          .reverse()
          .map(item => {
            return (
              <tr className={style.tableData}>
                <td>{item.count}</td>
                <td>{item.latitude}</td>
                <td>{item.longitude}</td>
                <td>{item.timestamp}</td>
                <td>{item.natural}</td>
                <td>{item.velocityKM}</td>
                <td>{item.velocityMPH}</td>
              </tr>
            );
          })}
      </table>
    );
  }
}

export default hot(module)(Table);
