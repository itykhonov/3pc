import { SagaIterator } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { getSearchItemsWatcher } from './getSearchResults/watcher';

export function* searchItemsRootSaga(): SagaIterator {
  yield fork(getSearchItemsWatcher);
}
