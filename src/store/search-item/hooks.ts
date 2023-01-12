import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { useParams } from 'react-router';
import { getSearchItemRequest } from './actions';
import { IGeneralMessage } from 'src/types/global';
import {
  searchItemDataSelector,
  searchItemErrorSelector,
  searchItemLoadingSelector
} from './selectors';
import { ISearchItem } from './types';
import { useSelectSearchItemsData } from '../search/hooks';

export const useSelectSearchItem: () => ISearchItem[] | undefined = () => {
  return useSelector(searchItemDataSelector);
};

export const useSelectSearchItemLoading: () => boolean = () => {
  return useSelector(searchItemLoadingSelector);
};

export const useSelectSearchItemError: () => IGeneralMessage = () => {
  return useSelector(searchItemErrorSelector);
};

export const useGetSearchItem = (): ((id: string) => void) => {
  const dispatch = useDispatch();
  const searchItems = useSelectSearchItemsData();
  return useCallback(
    (id: string) => {
      const urls: string[] = searchItems[id]?.films;
      if (urls && urls.length) {
        dispatch(getSearchItemRequest({ urls }));
      }
    },
    [dispatch, searchItems]
  );
};

export const useSelectRouterPathSearchItemID: () => string | undefined = () => {
  const { id } = useParams();
  return id;
};
