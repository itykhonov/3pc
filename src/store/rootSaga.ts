import { all, fork } from 'redux-saga/effects';
import { searchItemRootSaga } from './search-item/sagas/root';
import { searchItemsRootSaga } from './search/sagas';

export function* rootSaga(): Iterator<unknown> {
  yield all([fork(searchItemsRootSaga), fork(searchItemRootSaga)]);
}
