import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { IGeneralMessage } from 'src/types/global';
import { ISearchItem } from '../search/types';
import { getSearchItemsRequest } from './actions';
import {
  searchItemsSelector,
  getSearchItemsPagesCountSelector,
  searchItemsErrorSelector,
  searchItemsLoadingSelector,
  searchLimitSelector,
  searchItemsDataSelector
} from './selectors';

export const useSelectSearchItems: () => ISearchItem[] = () => {
  return useSelector(searchItemsSelector);
};

export const useSelectSearchItemsData: () => Record<string, ISearchItem> =
  () => {
    return useSelector(searchItemsDataSelector);
  };

export const useSelectSearchItemsLoading: () => boolean = () => {
  return useSelector(searchItemsLoadingSelector);
};

export const useSelectSearchItemsError: () => IGeneralMessage = () => {
  return useSelector(searchItemsErrorSelector);
};

export const useSelectSearchItemsCurrentPage: () => number = () => {
  const query = useQuery();
  return Number(query.get('page')) || 1;
};

export const useSelectSearchItemsPagesCount: () => number = () => {
  return useSelector(getSearchItemsPagesCountSelector);
};

export const useGetSearchItems: () => (
  searchString: string,
  page: number
) => void = () => {
  const dispatch = useDispatch();
  return useCallback(
    (searchString: string, page: number) => {
      dispatch(getSearchItemsRequest({ searchString, page }));
    },
    [dispatch]
  );
};

export const useSelectSearchString: () => string = () => {
  const query = useQuery();
  return query.get('search') || '';
};

export const useSelectSearchLimit: () => number = () => {
  return useSelector(searchLimitSelector);
};

export const useQuery = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};
