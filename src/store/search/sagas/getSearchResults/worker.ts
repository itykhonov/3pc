import { GetSearchItemsRequestType } from '../../types';
import { SagaIterator } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { getSearchItemsFailure, getSearchItemsSuccess } from '../../actions';
import { getSearchItems } from 'src/services/api';
import { ISearchItem } from 'src/store/search/types';

export function* getSearchItemsWorker({
  payload: { searchString, page }
}: GetSearchItemsRequestType): SagaIterator {
  try {
    const result = yield call(getSearchItems, searchString, page);
    if (result) {
      const { results, count } = result.data as {
        results: ISearchItem[];
        count: number;
      };

      yield put(
        getSearchItemsSuccess({
          data: {
            searchItems: results.reduce(
              (
                acc: Record<string, ISearchItem>,
                { name, films }: ISearchItem
              ) => {
                acc[name] = { name, films };
                return acc;
              },
              {}
            )
          },
          pagesCount: Math.ceil(count / 10),
          limit: 10
        })
      );
    } else {
      yield put(
        getSearchItemsFailure({
          error: { message: 'No results SEARCH_ITEMS' }
        })
      );
    }
  } catch (error: unknown) {
    yield put(getSearchItemsFailure({ error: error as { message: string } }));
  }
}
