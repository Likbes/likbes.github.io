/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { hot } from 'react-hot-loader';

const FormComponent = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={props.data.firstName}
        placeholder="First name"
        onChange={props.handleChange}
      />
      <br />
      <br />
      <input
        type="text"
        name="lastName"
        value={props.data.lastName}
        placeholder="Last name"
        onChange={props.handleChange}
      />
      <br />
      <br />
      <textarea value={`some default text with fN: ${props.data.firstName}`} />
      <br />
      <br />
      <label htmlFor="check">
        <input
          type="checkbox"
          id="check"
          checked={props.data.isFriendly}
          onChange={props.handleChange}
          name="isFriendly"
        />
        Is Friendly?
      </label>
      <br />
      <br />
      <label htmlFor="radioOne">
        <input
          type="radio"
          id="radioOne"
          name="gender"
          value="male"
          checked={props.data.gender === 'male'}
          onChange={props.handleChange}
        />
        Male?
      </label>
      <br />
      <br />
      <label htmlFor="radioTwo">
        <input
          type="radio"
          id="radioTwo"
          name="gender"
          value="female"
          checked={props.data.gender === 'female'}
          onChange={props.handleChange}
        />
        Female?
      </label>
      <br />
      <br />
      <select
        value={props.data.favColor}
        name="favColor"
        onChange={props.handleChange}
      >
        <option value="red">Red</option>
        <option value="white">White</option>
        <option value="black">Black</option>
        <option value="yellow">Yellow</option>
      </select>
      <br />
      <br />
      <h1>
        {props.data.firstName} {props.data.lastName}
      </h1>
      <h2>You are a {props.data.gender}</h2>
      <button type="submit">Submit</button>
    </form>
  );
};

export default hot(module)(FormComponent);
