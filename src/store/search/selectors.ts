import { createSelector } from 'reselect';
import { AppState } from '../rootReducer';

const getSearchItems = (state: AppState) =>
  Object.values(state.search.data.searchItems);
const getErrorSearchItems = (state: AppState) => state.search.error;
const getLoadingSearchItems = (state: AppState) => state.search.loading;
const getSearchLimit = (state: AppState) => state.search.limit;
const getSearchItemsPagesCount = (state: AppState) => state.search.pagesCount;
const getSearchItemsData = (state: AppState) => state.search.data.searchItems;

export const searchItemsSelector = createSelector(
  getSearchItems,
  (searchItems) => searchItems
);

export const searchItemsErrorSelector = createSelector(
  getErrorSearchItems,
  (error) => error
);

export const searchItemsLoadingSelector = createSelector(
  getLoadingSearchItems,
  (loading) => loading
);

export const getSearchItemsPagesCountSelector = createSelector(
  getSearchItemsPagesCount,
  (totalCount) => totalCount
);

export const searchLimitSelector = createSelector(
  getSearchLimit,
  (limit) => limit
);

export const searchItemsDataSelector = createSelector(
  getSearchItemsData,
  (searchItemsData) => searchItemsData
);
