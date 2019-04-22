const fetchCatsError = () => {
  return {
    type: 'FETCH_CATS_ERROR',
  };
};

const fetchCatsStarted = () => {
  return {
    type: 'FETCH_CATS_START',
  };
};

const fetchCatsSuccess = cat => {
  return {
    type: 'FETCH_CATS_SUCCESS',
    payload: cat,
  };
};

const fetchCats = () => dispatch => {
  dispatch(fetchCatsStarted());

  fetch('https://api.thecatapi.com/v1/images/search', {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': '2865cbc1-f0b9-4501-af3f-18955a0b6d61',
    },
  })
    .then(catResponse => catResponse.json())
    .then(cat => dispatch(fetchCatsSuccess(cat)))
    .catch(() => dispatch(fetchCatsError()));
};

export default fetchCats;
