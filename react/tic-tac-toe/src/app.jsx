/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable no-plusplus */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { hot } from 'react-hot-loader';
import ResultsContainer from './ResultsContainer';
import SelectPlayer from './SelectPlayer';
import style from './app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allow: 'yes',
      player: '',
      computer: '',
      turn: 1,
      gameState: [],
      result: 'gameplay',
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.computerWin = this.computerWin.bind(this);
    this.stopOpponent = this.stopOpponent.bind(this);
    this.randomPlay = this.randomPlay.bind(this);
    this.loseGame = this.loseGame.bind(this);
    this.tieGame = this.tieGame.bind(this);
    this.computerPlay = this.computerPlay.bind(this);
    this.reset = this.reset.bind(this);
    this.replay = this.replay.bind(this);
  }

  handleSelect(choice) {
    if (choice === 'X') {
      this.setState({
        player: 'X',
        computer: 'O',
      });
      this.reset();
    } else if (choice === 'O') {
      this.setState({
        player: 'O',
        computer: 'X',
      });
      this.reset();
    }
  }

  handlePlay(id) {
    const { turn, player, computer, gameState, allow, result } = this.state;
    const status = gameState.slice();
    const block = document.getElementById(id);
    if (block.innerHTML === '' && allow === 'yes' && result === 'gameplay') {
      block.innerHTML = player;
      status[id] = player;
      this.setState({ gameState: status, allow: 'no' });

      if (turn === 5) {
        this.tieGame();
      }

      if (turn === 1) {
        if (
          status[1] === player ||
          status[3] === player ||
          status[7] === player ||
          status[9] === player
        ) {
          this.computerPlay(5, status, computer);
        } else if (status[5] === undefined) {
          this.computerPlay(5, status, computer);
        } else if (status[1] === undefined) {
          this.computerPlay(1, status, computer);
        } else if (status[9] === undefined) {
          this.computerPlay(9, status, computer);
        }
      } else {
        this.computerWin(status, player, computer);
      }
      this.setState(prev => {
        return { turn: prev.turn + 1 };
      });
    }
  }

  computerWin(status, player, computer) {
    if (
      status[1] === computer &&
      status[4] === computer &&
      status[7] === undefined
    ) {
      this.computerPlay(7, status, computer, false);
    } else if (
      status[1] === computer &&
      status[2] === computer &&
      status[3] === undefined
    ) {
      this.computerPlay(3, status, computer, false);
    } else if (
      status[1] === computer &&
      status[5] === computer &&
      status[9] === undefined
    ) {
      this.computerPlay(9, status, computer, false);
    } else if (
      status[9] === computer &&
      status[5] === computer &&
      status[1] === undefined
    ) {
      this.computerPlay(1, status, computer, false);
    } else if (
      status[1] === computer &&
      status[9] === computer &&
      status[5] === undefined
    ) {
      this.computerPlay(5, status, computer, false);
    } else if (
      status[4] === computer &&
      status[5] === computer &&
      status[6] === undefined
    ) {
      this.computerPlay(6, status, computer, false);
    } else if (
      status[7] === computer &&
      status[5] === computer &&
      status[3] === undefined
    ) {
      this.computerPlay(3, status, computer, false);
    } else if (
      status[3] === computer &&
      status[5] === computer &&
      status[7] === undefined
    ) {
      this.computerPlay(7, status, computer, false);
    } else if (
      status[6] === computer &&
      status[5] === computer &&
      status[4] === undefined
    ) {
      this.computerPlay(4, status, computer, false);
    } else if (
      status[2] === computer &&
      status[5] === computer &&
      status[8] === undefined
    ) {
      this.computerPlay(8, status, computer, false);
    } else if (
      status[5] === computer &&
      status[8] === computer &&
      status[2] === undefined
    ) {
      this.computerPlay(2, status, computer, false);
    } else if (
      status[3] === computer &&
      status[6] === computer &&
      status[9] === undefined
    ) {
      this.computerPlay(9, status, computer, false);
    } else if (
      status[1] === computer &&
      status[2] === computer &&
      status[3] === undefined
    ) {
      this.computerPlay(3, status, computer, false);
    } else if (
      status[1] === computer &&
      status[3] === computer &&
      status[2] === undefined
    ) {
      this.computerPlay(2, status, computer, false);
    } else if (
      status[1] === computer &&
      status[7] === computer &&
      status[4] === undefined
    ) {
      this.computerPlay(4, status, computer, false);
    } else if (
      status[1] === computer &&
      status[9] === computer &&
      status[5] === undefined
    ) {
      this.computerPlay(5, status, computer, false);
    } else if (
      status[5] === computer &&
      status[6] === computer &&
      status[4] === undefined
    ) {
      this.computerPlay(4, status, computer, false);
    } else if (
      status[1] === computer &&
      status[4] === computer &&
      status[6] === computer &&
      status[5] === undefined
    ) {
      this.computerPlay(5, status, computer, false);
    } else if (
      status[1] === computer &&
      status[7] === computer &&
      status[9] === computer &&
      status[8] === undefined
    ) {
      this.computerPlay(8, status, computer, false);
    } else if (
      status[1] === computer &&
      status[7] === computer &&
      status[8] === computer &&
      status[9] === undefined
    ) {
      this.computerPlay(9, status, computer, false);
    } else if (
      status[1] === computer &&
      status[9] === computer &&
      status[8] === computer &&
      status[7] === undefined
    ) {
      this.computerPlay(7, status, computer, false);
    } else if (
      status[1] === computer &&
      status[2] === computer &&
      status[5] === computer &&
      status[8] === undefined
    ) {
      this.computerPlay(8, status, computer, false);
    } else if (
      status[1] === computer &&
      status[5] === computer &&
      status[8] === computer &&
      status[2] === undefined
    ) {
      this.computerPlay(2, status, computer, false);
    } else if (
      status[1] === computer &&
      status[2] === computer &&
      status[8] === computer &&
      status[5] === undefined
    ) {
      this.computerPlay(5, status, computer, false);
    } else if (
      status[1] === computer &&
      status[3] === computer &&
      status[6] === computer &&
      status[9] === undefined
    ) {
      this.computerPlay(9, status, computer, false);
    } else if (
      status[1] === computer &&
      status[6] === computer &&
      status[9] === computer &&
      status[3] === undefined
    ) {
      this.computerPlay(3, status, computer, false);
    } else if (
      status[1] === computer &&
      status[9] === computer &&
      status[3] === computer &&
      status[6] === undefined
    ) {
      this.computerPlay(6, status, computer, false);
    } else if (
      status[3] === computer &&
      status[5] === computer &&
      status[6] === undefined
    ) {
      this.computerPlay(6, status, computer, false);
    } else {
      this.stopOpponent(status, player, computer);
    }
  }

  stopOpponent(status, player, computer) {
    if (
      status[1] === player &&
      status[3] === player &&
      status[5] === computer &&
      status[2] === undefined
    ) {
      this.computerPlay(2, status, computer);
    } else if (
      status[1] === player &&
      status[7] === player &&
      status[5] === computer &&
      status[4] === undefined
    ) {
      this.computerPlay(4, status, computer);
    } else if (
      status[7] === player &&
      status[9] === player &&
      status[5] === computer &&
      status[8] === undefined
    ) {
      this.computerPlay(8, status, computer);
    } else if (
      status[3] === player &&
      status[9] === player &&
      status[6] === computer &&
      status[6] === undefined
    ) {
      this.computerPlay(6, status, computer);
    } else if (
      status[1] === player &&
      status[9] === player &&
      status[5] === computer &&
      status[2] === undefined
    ) {
      this.computerPlay(2, status, computer);
    } else if (
      status[8] === player &&
      status[6] === player &&
      status[5] === computer &&
      status[7] === undefined
    ) {
      this.computerPlay(7, status, computer);
    } else if (
      status[7] === player &&
      status[3] === player &&
      status[5] === computer &&
      status[6] === undefined
    ) {
      this.computerPlay(6, status, computer);
    } else if (
      status[1] === player &&
      status[7] === player &&
      status[3] === undefined &&
      status[4] === computer
    ) {
      this.computerPlay(3, status, computer);
    } else if (
      status[1] === player &&
      status[3] === player &&
      status[7] === undefined &&
      status[2] === computer
    ) {
      this.computerPlay(7, status, computer);
    } else if (
      status[1] === computer &&
      status[5] === player &&
      status[9] === player &&
      status[3] === undefined
    ) {
      this.computerPlay(3, status, computer);
    } else if (
      status[2] === player &&
      status[5] === player &&
      status[8] === undefined
    ) {
      this.computerPlay(8, status, computer);
    } else if (
      status[2] === player &&
      status[8] === player &&
      status[5] === undefined
    ) {
      this.computerPlay(5, status, computer);
    } else if (
      status[3] === player &&
      status[9] === player &&
      status[6] === undefined
    ) {
      this.computerPlay(6, status, computer);
    } else if (
      status[3] === player &&
      status[6] === player &&
      status[9] === undefined
    ) {
      this.computerPlay(9, status, computer);
    } else if (
      status[3] === player &&
      status[5] === player &&
      status[7] === undefined
    ) {
      this.computerPlay(7, status, computer);
    } else if (
      status[6] === player &&
      status[9] === player &&
      status[3] === undefined
    ) {
      this.computerPlay(3, status, computer);
    } else if (
      status[5] === player &&
      status[7] === player &&
      status[3] === undefined
    ) {
      this.computerPlay(3, status, computer);
    } else if (
      status[4] === player &&
      status[5] === player &&
      status[6] === undefined
    ) {
      this.computerPlay(6, status, computer);
    } else if (
      status[4] === player &&
      status[6] === player &&
      status[5] === undefined
    ) {
      this.computerPlay(5, status, computer);
    } else if (
      status[5] === player &&
      status[6] === player &&
      status[4] === undefined
    ) {
      this.computerPlay(4, status, computer);
    } else if (
      status[7] === player &&
      status[8] === player &&
      status[9] === undefined
    ) {
      this.computerPlay(9, status, computer);
    } else if (
      status[8] === player &&
      status[9] === player &&
      status[7] === undefined
    ) {
      this.computerPlay(7, status, computer);
    } else if (
      status[7] === player &&
      status[9] === player &&
      status[8] === undefined
    ) {
      this.computerPlay(8, status, computer);
    } else if (
      status[3] === player &&
      status[7] === player &&
      status[5] === undefined
    ) {
      this.computerPlay(5, status, computer);
    } else if (
      status[1] === player &&
      status[2] === player &&
      status[3] === undefined
    ) {
      this.computerPlay(3, status, computer);
    } else if (
      status[1] === player &&
      status[3] === player &&
      status[2] === undefined
    ) {
      this.computerPlay(2, status, computer);
    } else if (
      status[1] === player &&
      status[3] === player &&
      status[2] === undefined
    ) {
      this.computerPlay(2, status, computer);
    } else if (
      status[1] === player &&
      status[7] === player &&
      status[4] === undefined
    ) {
      this.computerPlay(4, status, computer);
    } else if (
      status[1] === player &&
      status[4] === player &&
      status[7] === undefined
    ) {
      this.computerPlay(7, status, computer);
    } else if (
      status[1] === player &&
      status[5] === player &&
      status[9] === undefined
    ) {
      this.computerPlay(9, status, computer);
    } else if (
      status[1] === player &&
      status[9] === player &&
      status[5] === undefined
    ) {
      this.computerPlay(5, status, computer);
    } else if (
      status[1] === player &&
      status[7] === player &&
      status[4] === undefined
    ) {
      this.computerPlay(4, status, computer);
    } else {
      this.randomPlay(status, computer);
    }
  }

  randomPlay(status, computer) {
    for (let i = 1; i < status.length; i++) {
      if (status[i] === undefined) {
        this.computerPlay(i, status, computer);
        break;
      }
    }
  }

  computerPlay(index, status, computer, winning) {
    setTimeout(
      function play() {
        document.getElementById(index).innerHTML = computer;
        status[index] = computer;
        this.setState({
          allow: 'yes',
          status,
        });
        if (winning === true) {
          this.winGame();
        }
        if (winning === false) {
          this.setState({
            allow: 'no',
          });
          this.loseGame();
        }
      }.bind(this),
      // eslint-disable-next-line prettier/prettier
      250
    );
  }

  tieGame() {
    setTimeout(
      function tie() {
        this.setState({
          result: 'Good job, you tied!',
        });
      }.bind(this),
      // eslint-disable-next-line prettier/prettier
      250
    );
  }

  loseGame() {
    setTimeout(
      function lose() {
        this.setState({
          result: 'You lost!',
        });
      }.bind(this),
      // eslint-disable-next-line prettier/prettier
      250
    );
  }

  reset() {
    this.setState({
      allow: 'yes',
      turn: 1,
      gameState: [],
      result: 'gameplay',
    });
    document.getElementById('selectMenu').style.display = 'none';
    for (let i = 1; i < 10; i++) {
      document.getElementById(i).innerHTML = null;
    }
  }

  replay() {
    this.reset();
    document.getElementById('selectMenu').style.display = 'block';
  }

  render() {
    const { result } = this.state;
    return (
      <>
        <SelectPlayer handleSelect={this.handleSelect} />
        <ResultsContainer replay={this.replay} result={result} />
        <div className={style.container}>
          {[[1, 2, 3], [4, 5, 6], [7, 8, 9]].map(list => {
            return (
              <div className={style.line} key={list}>
                {list.map(elem => {
                  return (
                    <div
                      className={style.gameBox}
                      id={elem}
                      role="button"
                      key={elem}
                      onClick={this.handlePlay.bind(this, elem)}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default hot(module)(App);
