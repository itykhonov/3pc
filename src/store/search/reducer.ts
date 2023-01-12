import {
  GET_SEARCH_ITEMS_FAILURE,
  GET_SEARCH_ITEMS_REQUEST,
  GET_SEARCH_ITEMS_SUCCESS
} from './actionTypes';

import { ISearchItemsState, SearchActionsTypes } from './types';

const initialState: ISearchItemsState = {
  loading: false,
  error: '',
  data: {
    searchItems: {}
  },
  pagesCount: 0,
  limit: 0
};

export default (
  state = initialState,
  action: SearchActionsTypes
): ISearchItemsState => {
  switch (action.type) {
    case GET_SEARCH_ITEMS_REQUEST:
      return {
        ...state,
        data: {
          ...state.data,
          searchItems: {}
        },
        loading: true
      };
    case GET_SEARCH_ITEMS_SUCCESS:
      return {
        ...state,
        data: {
          ...action.payload.data
        },
        pagesCount: action.payload.pagesCount,
        limit: action.payload.limit,
        loading: false
      };
    case GET_SEARCH_ITEMS_FAILURE:
      return {
        ...initialState,
        error: action.payload.error.message
      };
    default:
      return {
        ...state
      };
  }
};
