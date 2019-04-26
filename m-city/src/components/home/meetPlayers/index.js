import React, { Component } from 'react';
import Stripes from '../../../Resources/images/stripes.png';
import { TagTitle, TagButton } from './Tags';

export default class MeetPlayers extends Component {

  state = {

  }

  render() {
    return (
      <div
        className='home_meetplayers'
        style={{
          background: `#fff url(${Stripes})`
        }}
      >
        <div className='container'>
          <div className='home_meetplayers_wrapper'>
            <div className='home_card_wrapper'>
              card
            </div>
            <div className='home_text_wrapper'>
              <TagTitle>Meet</TagTitle>
              <TagTitle>The</TagTitle>
              <TagTitle>Players</TagTitle>
              <TagButton>Meet them here</TagButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
