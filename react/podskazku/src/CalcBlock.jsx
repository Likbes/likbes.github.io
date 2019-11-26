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
      keyWord: 'стать небом',
      counter: 0,
      top: '50%',
      left: '50%',
      show: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.delete = this.delete.bind(this);
    this.clear = this.clear.bind(this);
    this.evaluate = this.evaluate.bind(this);
    this.generatePercentage = this.generatePercentage.bind(this);
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
      data: update
    });
  }

  generatePercentage() {
    let rand = 0 + Math.random() * (100 + 1 - 0);
    return `${Math.floor(rand)}%`;
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
    const { data, keyWord, counter, top, left } = this.state;
    return (
      <div className={style.calcWrapper}>
        <div className={style.case}>
          <p className='title'>
            коль хочешь получить подсказку ты, хоти. есть 3 пути: загадку
            разгадать, 100 раз на кнопочку нажать и button нужный свой догнать.
            решай
          </p>
          <br />
          <p>а вот загадка: как поймать птицу, не сломив ее дух?</p>
          <input
            type='text'
            className={style.inputField}
            value={data}
            onChange={e => this.setState({ data: e.target.value })}
          />
          <CalcDisplay
            input={this.handleChange}
            clear={this.clear}
            enter={this.evaluate}
            del={this.delete}
          />
          {keyWord === data.toLowerCase() &&
            'че ты гуглишь, а? давай нажимай 100 раз'}
        </div>
        <div
          style={{
            display: 'flex',
            borderTop: '2px solid #e0e5ec',
            width: '100%',
            height: '400px',
            marginTop: '2rem'
          }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '50%',
              borderRight: '2px solid #e0e5ec'
            }}>
            <button
              onClick={() =>
                this.setState(prev => ({
                  counter:
                    prev.counter < 20
                      ? prev.counter + 1
                      : prev.counter + prev.counter * prev.counter
                }))
              }>
              нажми 100 раз и получи подсказку
            </button>
            {counter > 100 && 'не подсказку, а по лицу. кнопку лови'}
            <p>прогресс {counter}</p>
          </div>
          <div
            style={{
              display: 'flex',
              width: '50%',
              position: 'relative'
            }}>
            <button
              onMouseOver={() =>
                this.setState({
                  left: this.generatePercentage(),
                  top: this.generatePercentage()
                })
              }
              onClick={() => this.setState({ show: true })}
              style={{ position: 'absolute', top, left }}>
              нажми на меня и получи подсказку
            </button>
            {this.state.show &&
              'ну вот, можешь когда хочешь. отправь мне 10 аниме фоточек и получишь подсказку. после меня, Вике, а потом Лене. итого 3 подсказки за 1 круг. удачи '}
          </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(CalcBlock);
