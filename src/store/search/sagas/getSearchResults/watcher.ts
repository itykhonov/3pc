import { takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { GET_SEARCH_ITEMS_REQUEST } from '../../actionTypes';
import { getSearchItemsWorker } from './worker';

export function* getSearchItemsWatcher(): SagaIterator {
  yield takeEvery(GET_SEARCH_ITEMS_REQUEST, getSearchItemsWorker);
}
