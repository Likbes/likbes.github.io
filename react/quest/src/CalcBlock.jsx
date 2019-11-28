/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-eval */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { hot } from 'react-hot-loader';
import style from './app.scss';

import Photo from './photo.jpg';
import Rebus from './rebus.jpg';
import NA from './NA.jpg';

class CalcBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      value: '',
      list: [],
      haveLenasSurprise: false,
      haveBan: false,
      questions: [
        'Он всегда за твоей спиной, но ты постоянно кидаешь его, а затем протягиваешь руку помощи, что бы помочь подняться',
        'Не важно слабый ты или слабый - все равно 11. Смотри на кольца.',
        'Когда воины понимают, что поражение неизбежно - они бегут с поля боя во имя сохранения жизней. Когда самураев вынуждают подчиняться системе и приходить к 7:20, они не подчиняются, но остаются безнаказанными. Найди лазейку',
        'Лежачему больному нужен предмет икс, но здоровый человек сам дойдет и всё сделает. Где? (ищи на первом этаже)',
        'На Пасху это превращается в орудие сражения. Но тебе нужно найти то, что улучшает его вкус и что прячет под окнами Лена и заглянуть в-на-изнанку',
        'найти подарок свой попробуй, и жизнь ты рискнуть обязан, помни',
        'вот последняя загадка. отбери попробуй враз, расколбас. защитит от стен и пуль мой любимый шампунь Жумайсынба. получить легко - скажи Никита отдай подарок'
      ],
      answers: ['сундук', 'волк', 'заяц', 'утка', 'яйцо', 'игла'],
      podskazki: [
        'там ты и найдешь ответ. его и вводи',
        'неважно, дохлый ты или безногий. все равно 11. любишь подтягиваться? а по лесенке? ммм?',
        'вариант мой - когда ОЧЕНЬ хочется уйти после пятого, а на центральном стоят',
        'честно, братан, тут только с божьей помощью(когда ОЧЕНЬ надо на скрам, я иду)',
        'советую покущац в неплохом месте, закладка на месте, где я обычно сижу',
        'подарок ты найди попробуй, даю картинку из рук мастера. фломастера. без пдсказок. разве что лучше смотреть направо как войдешь в данж',
        'вот и сказочке конец. кто прошел тот молодец. SOON SI'
      ]
    };

    this.habdleChange = this.habdleChange.bind(this);
    this.handleLenasChanges = this.handleLenasChanges.bind(this);
  }

  habdleChange(e) {
    let { list, step, answers } = this.state;

    if (e.target.value.toLowerCase() === answers[step]) {
      const result = list.concat([answers[step]]);

      this.setState({
        list: result,
        step: ++step,
        value: ''
      });

      return;
    }

    this.setState({
      value: e.target.value
    });
  }

  handleLenasChanges(e) {
    if (e.target.value.toLowerCase() === 'бан') {
      return this.setState({ haveBan: true, value: '' });
    }

    if (e.target.value.toLowerCase() === 'злато') {
      return this.setState({ haveLenasSurprise: true, value: '' });
    }

    this.setState({ value: e.target.value });
  }

  render() {
    const {
      step,
      value,
      list,
      questions,
      podskazki,
      haveLenasSurprise,
      haveBan
    } = this.state;

    return (
      <div className={style.calcWrapper}>
        {haveLenasSurprise ? (
          <>
            <div className={style.case}>
              <p>
                автор Лена, Вика. дикие люди, мой максимум - qr код, тут же так
                просто не пройти
                <br />
                <br />
                <span>
                  Загадка {step}
                  <br />
                  {questions[step]}
                </span>
              </p>
              <br />
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <span>ответ будь добр</span>
                <input
                  type='text'
                  value={value}
                  onChange={e => this.habdleChange(e)}
                />
              </div>
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
                {podskazki[step]}
                {step === 5 && <img src={Photo} style={{ width: '70%' }} />}
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '50%'
                }}>
                <ul>
                  {list.length === 0
                    ? 'решай загадки, тут будет прогресс'
                    : list.map(el => <li key={el}>{el}</li>)}
                </ul>
              </div>
            </div>
            <a
              style={{ marginTop: '40px' }}
              href='https://www.youtube.com/watch?v=KTfyGVI9Yxc'>
              не обращай внимания
            </a>
          </>
        ) : (
          <div>
            {!haveBan ? (
              <>
                <p>
                  привет. ты получил это этот сайт на английском, в 8:00 эпрокс.
                </p>
                <p>хочешь квест? хоти. ребус реши, а там поговорим</p>
                <div style={{ textAlign: 'center' }}>
                  <img src={Rebus} width={'70%'} />
                </div>
              </>
            ) : (
              <div style={{ textAlign: 'center' }}>
                <img src={NA} width={'70%'} />
              </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <p>
                {!haveBan
                  ? 'давай решай'
                  : 'ребус набер ту, кодовое слово найдешь на месте'}
              </p>
              <input
                type='text'
                value={value}
                onChange={e => this.handleLenasChanges(e)}
              />
            </div>
          </div>
        )}
        <a
          style={{ marginTop: '40px' }}
          href='https://www.youtube.com/watch?v=6YzA79684_w'>
          а что это такое может подсказка
        </a>
      </div>
    );
  }
}

export default hot(module)(CalcBlock);
