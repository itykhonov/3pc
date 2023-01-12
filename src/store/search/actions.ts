import {
  GET_SEARCH_ITEMS_FAILURE,
  GET_SEARCH_ITEMS_REQUEST,
  GET_SEARCH_ITEMS_SUCCESS
} from './actionTypes';
import {
  GetSearchItemsFailureType,
  GetSearchItemsRequestType,
  GetSearchItemsSuccessType,
  ISearchItemsFailurePayload,
  ISearchItemsRequestPayload,
  ISearchItemsSuccessPayload
} from './types';

export const getSearchItemsRequest = (
  payload: ISearchItemsRequestPayload
): GetSearchItemsRequestType => ({
  type: GET_SEARCH_ITEMS_REQUEST,
  payload
});

export const getSearchItemsSuccess = (
  payload: ISearchItemsSuccessPayload
): GetSearchItemsSuccessType => ({
  type: GET_SEARCH_ITEMS_SUCCESS,
  payload
});

export const getSearchItemsFailure = (
  payload: ISearchItemsFailurePayload
): GetSearchItemsFailureType => ({
  type: GET_SEARCH_ITEMS_FAILURE,
  payload
});
