import {
  GET_SEARCH_ITEM_FAILURE,
  GET_SEARCH_ITEM_REQUEST,
  GET_SEARCH_ITEM_SUCCESS
} from './actionTypes';

import { ISearchItemState, SearchItemActionsTypes } from './types';

const initialState: ISearchItemState = {
  loading: false,
  error: '',
  data: undefined
};

export default (
  state = initialState,
  action: SearchItemActionsTypes
): ISearchItemState => {
  switch (action.type) {
    case GET_SEARCH_ITEM_REQUEST:
      return {
        ...initialState,
        loading: true
      };
    case GET_SEARCH_ITEM_SUCCESS:
      return {
        ...initialState,
        data: action.payload.data
      };
    case GET_SEARCH_ITEM_FAILURE:
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
