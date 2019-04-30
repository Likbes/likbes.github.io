import React from 'react';
import PropTypes from 'prop-types';

const Filters = props => {
  return (
    <div className="match_filters_box">
      <div className="tag">
        Show Match
      </div>
      <div className="cont">
        <button className={'option'}>
          All
        </button>
        <button className={'option'}>
          Played
        </button>
        <button className={'option'}>
          Not played
        </button>
      </div>
    </div>
  );
};

Filters.propTypes = {

};

export default Filters;
