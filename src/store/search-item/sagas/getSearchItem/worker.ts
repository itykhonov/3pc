import { GetSearchItemRequestType } from '../../types';
import { SagaIterator } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { getSearchItemFailure, getSearchItemSuccess } from '../../actions';
import { getSearchItem } from 'src/services/api';

export function* getSearchItemWorker({
  payload: { urls }
}: GetSearchItemRequestType): SagaIterator {
  try {
    const result = yield call(getSearchItem, urls);
    if (result) {
      yield put(
        getSearchItemSuccess({
          data: result.map(
            ({
              data: { title, release_date }
            }: {
              data: { title: string; release_date: string };
            }) => ({ title, release_date })
          )
        })
      );
    } else {
      yield put(
        getSearchItemFailure({
          error: { message: 'No results GET_SEARCH_ITEM_BY_ID' }
        })
      );
    }
  } catch (error: unknown) {
    yield put(getSearchItemFailure({ error: error as { message: string } }));
  }
}
