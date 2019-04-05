/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { hot } from 'react-hot-loader';
import Channel from './Channel';
import style from './app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [
        'dobriy_dan',
        'alison_channel',
        'DawgDebik',
        'MightyPoot',
        'melharucos',
      ],
      data: [],
      renderData: [],
    };
    this.showAll = this.showAll.bind(this);
    this.showStreaming = this.showStreaming.bind(this);
  }

  componentDidMount() {
    this.updateData();
  }

  showStreaming() {
    const { data } = this.state;
    const renderData = data.filter(elem => elem.isStreaming);
    this.setState({ renderData });
  }

  showAll() {
    const { data } = this.state;
    this.setState({
      renderData: data,
    });
  }

  updateData() {
    const { channels: users } = this.state;
    const currentData = [];
    users.map((user, index) => {
      fetch(`https://api.twitch.tv/kraken/users/${user}`, {
        headers: {
          'Client-ID': 'i0mrg9z3fmc5b2a3n9iei801es7l1r',
        },
      })
        .then(data => data.json())
        .then(info => {
          currentData[index] = {};
          return Object.assign(currentData[index], {
            name: info.display_name,
            bio: info.bio,
            logo: info.logo,
          });
        })
        .then(() => {
          fetch(`https://api.twitch.tv/kraken/streams/${user}`, {
            headers: {
              'Client-ID': 'i0mrg9z3fmc5b2a3n9iei801es7l1r',
            },
          })
            .then(data => data.json())
            .then(info => {
              if (info.stream == null) {
                Object.assign(currentData[index], { isStreaming: false });
              } else {
                const { game, viewers } = info.stream;
                Object.assign(currentData[index], {
                  game,
                  viewers,
                  isStreaming: true,
                });
              }
            });
        })
        .then(() => {
          this.forceUpdate = this.forceUpdate.bind(this);
          return setTimeout(this.forceUpdate, 2000);
        });
      return '';
    });
    this.setState({
      data: currentData,
      renderData: currentData,
    });
  }

  render() {
    const { renderData } = this.state;
    return (
      <>
        <div className={style.titleDiv}>
          <h1 className={style.title}>Twitch TV API Tool</h1>
        </div>
        <div className={style.btnDiv}>
          <button
            type="button"
            className={style.streamingBtn}
            onClick={this.showStreaming}
          >
            Show Streaming
          </button>
          <button type="button" className={style.allBtn} onClick={this.showAll}>
            Show All
          </button>
        </div>
        {renderData.map(channel => {
          return <Channel {...channel} key={channel.name} />;
        })}
      </>
    );
  }
}

export default hot(module)(App);
