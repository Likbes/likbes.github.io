import React, { Component } from 'react';
import ProgressBar from '../ui/ProgressBar';
import LeagueTable from './Table';
import MatchesList from './MatchesList';

import { firebaseMatches } from '../../firebase';
import { firebaseLooper, reverseArray } from '../ui/misc';

export default class Matches extends Component {

  state = {
    isLoading: true,
    matches: [],
    filterMatches: [],
    playerFilter: 'All',
    resultFilter: 'All',
  }

  componentDidMount() {
    firebaseMatches
      .once('value')
      .then(snapshot => {
        const matches = firebaseLooper(snapshot);

        this.setState({
          isLoading: false,
          matches: reverseArray(matches),
          filterMatches: reverseArray(matches),
        });
      });
  }

  render() {
    const { isLoading, filterMatches } = this.state;
    return (
      <div className="the_matches_container">
        <div className="the_matches_wrapper">
          <div className="left">
            <div className="match_filters">

            </div>
            {
              !isLoading ?
                <MatchesList matches={filterMatches} /> :
                <ProgressBar isLoading={isLoading} />
            }
          </div>
          <div className="right">
            <LeagueTable />
          </div>
        </div>
      </div>
    );
  }
}
