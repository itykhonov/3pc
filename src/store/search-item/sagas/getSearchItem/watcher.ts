import { takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { GET_SEARCH_ITEM_REQUEST } from '../../actionTypes';
import { getSearchItemWorker } from './worker';

export function* getSearchItemWatcher(): SagaIterator {
  yield takeEvery(GET_SEARCH_ITEM_REQUEST, getSearchItemWorker);
}
