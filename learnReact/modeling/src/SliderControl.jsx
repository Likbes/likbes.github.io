/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { hot } from 'react-hot-loader';

function SliderControl(props) {
  return (
    <div className="scroll">
      <h2>Zoom the Chart Range:</h2>
      <input
        className="slider"
        style={{ width: 500 }}
        name="slider"
        type="range"
        min="1"
        max="274"
        value={props.slider}
        onChange={props.handleRange}
      />
    </div>
  );
}

export default hot(module)(SliderControl);
