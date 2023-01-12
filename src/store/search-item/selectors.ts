import { createSelector } from 'reselect';
import { AppState } from '../rootReducer';

const getSearchItem = (state: AppState) => state.searchItem.data;
const getErrorSearchItem = (state: AppState) => state.searchItem.error;
const getLoadingSearchItem = (state: AppState) => state.searchItem.loading;

export const searchItemDataSelector = createSelector(
  getSearchItem,
  (searchItem) => searchItem
);

export const searchItemErrorSelector = createSelector(
  getErrorSearchItem,
  (error) => error
);

export const searchItemLoadingSelector = createSelector(
  getLoadingSearchItem,
  (loading) => loading
);
