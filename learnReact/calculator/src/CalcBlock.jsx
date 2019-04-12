/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-eval */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { hot } from 'react-hot-loader';
import CalcDisplay from './CalcDisplay';
import style from './app.scss';

class CalcBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.delete = this.delete.bind(this);
    this.clear = this.clear.bind(this);
    this.evaluate = this.evaluate.bind(this);
  }

  handleChange(value) {
    const data = this.state.data.toString();
    const currLength = data.length;
    let current;
    let update;

    if (currLength === 0) {
      current = '';
      update = value;
    } else if (currLength > 0 && currLength < 20) {
      current = data.slice(0);
      update = current + value;
    } else if (currLength === 20) {
      update = data.slice(0);
    }

    this.setState({
      data: update,
    });
  }

  delete() {
    const data = this.state.data.toString();
    const deleted = data.slice(0, data.length - 1);
    this.setState({ data: deleted });
  }

  clear() {
    this.setState({ data: '' });
  }

  evaluate() {
    const { data } = this.state;
    const expression = data.slice(0);
    let answer = '';

    try {
      eval(expression);
    } catch (e) {
      if (e instanceof SyntaxError) {
        answer = 'Bad syntax!';
      }
    } finally {
      if (answer.length === 0) {
        answer = eval(expression);
      }
    }

    this.setState({ data: answer });
  }

  render() {
    const { data } = this.state;
    return (
      <div className={style.calcWrapper}>
        <div className={style.case}>
          <p className="title">JavaScript Calculator</p>
          <input
            type="text"
            readOnly
            className={style.inputField}
            value={data}
          />
          <CalcDisplay
            input={this.handleChange}
            clear={this.clear}
            enter={this.evaluate}
            del={this.delete}
          />
        </div>
      </div>
    );
  }
}

export default hot(module)(CalcBlock);
