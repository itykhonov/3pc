import { SagaIterator } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { getSearchItemWatcher } from './getSearchItem/watcher';

export function* searchItemRootSaga(): SagaIterator {
  yield fork(getSearchItemWatcher);
}
