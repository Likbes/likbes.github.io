/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { hot } from 'react-hot-loader';
import style from './app.scss';

class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 6,
      data: [],
    };
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(data => data.json())
      .then(data => {
        const peoples = data.people.reduce((prev, cur) => {
          return [...prev, cur];
        }, []);
        this.setState({
          data: peoples,
          number: data.number,
        });
      });
  }

  render() {
    const { number, data } = this.state;
    return (
      <>
        <h1 className={style.title}>Current Information From Space</h1>
        <p className={style.parag}>
          At this moment there are {number} humans in space. They are:
        </p>
        <ul className={style.peopleList}>
          {data.map(person => {
            return (
              <li className={style.item} key={person.name}>
                {person.name}, craft {person.craft}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default hot(module)(People);
