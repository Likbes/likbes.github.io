/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import style from './app.scss';

const ResultsContainer = ({ data }) => {
  // eslint-disable-next-line eqeqeq
  if (data == '') return '';
  return (
    <table className={style.resultsContainer}>
      <tbody>
        <tr className={style.resultsHead}>
          <th className={style.titleHead}>Article Title</th>
          <th className={style.infoHead}>Snippet(click to view article)</th>
        </tr>
        {data.map(item => {
          return (
            <tr
              className={style.resultBox}
              key={item.title}
              onClick={() => window.open(item.link)}
            >
              <td className={style.titleCol}>{item.title}</td>
              <td className={style.infoCol}>{item.info}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

ResultsContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
};

export default hot(module)(ResultsContainer);
