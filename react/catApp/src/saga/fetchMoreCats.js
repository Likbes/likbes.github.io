import { takeLatest, put } from 'redux-saga/effects';

// query 5 cat image at the same time
function* fetchMoreCatsSaga() {
  yield put({ type: 'FETCH_MORE_CATS_SAGA_START' });

  const catResponse = yield fetch(
    'https://api.thecatapi.com/v1/images/search?limit=5',
    {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '2865cbc1-f0b9-4501-af3f-18955a0b6d61',
      },
    },
  );

  const cats = yield catResponse.json();

  yield put({ type: 'FETCH_MORE_CATS_SAGA_SUCCESS', payload: cats });
}

// Every time we dispatch an action
// that has a type property "FETCH_MORE_CATS"
// call the fetchMoreCatsSaga function
export default function* watchFetchMoreCatsSaga() {
  yield takeLatest('FETCH_MORE_CATS', fetchMoreCatsSaga);
}
