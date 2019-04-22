/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-handler-names */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from './components/Button';
import CatList from './components/CatList';
import fetchCats from './actions/fetchCats';
import fetchMoreCats from './actions/fetchMoreCats';
import style from './scss/App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // eslint-disable-next-line no-shadow
    const { fetchCats, fetchMoreCats, cats } = this.props;
    return (
      <div className={style.App}>
        <Button
          className={style.primary}
          text="Fetch cats"
          onClick={fetchCats}
        />
        <Button
          className={style.secondary}
          text="Fetch more cats"
          onClick={fetchMoreCats}
        />
        <header className={style['App-header']}>
          <CatList cats={cats} />
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cats: state.cats,
});

export default connect(
  mapStateToProps,
  { fetchCats, fetchMoreCats },
)(App);
