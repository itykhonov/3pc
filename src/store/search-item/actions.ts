import {
  GET_SEARCH_ITEM_FAILURE,
  GET_SEARCH_ITEM_REQUEST,
  GET_SEARCH_ITEM_SUCCESS
} from './actionTypes';
import {
  GetSearchItemFailureType,
  GetSearchItemRequestType,
  GetSearchItemSuccessType,
  ISearchItemFailurePayload,
  ISearchItemRequestPayload,
  ISearchItemSuccessPayload
} from './types';

export const getSearchItemRequest = (
  payload: ISearchItemRequestPayload
): GetSearchItemRequestType => ({
  type: GET_SEARCH_ITEM_REQUEST,
  payload
});

export const getSearchItemSuccess = (
  payload: ISearchItemSuccessPayload
): GetSearchItemSuccessType => ({
  type: GET_SEARCH_ITEM_SUCCESS,
  payload
});

export const getSearchItemFailure = (
  payload: ISearchItemFailurePayload
): GetSearchItemFailureType => ({
  type: GET_SEARCH_ITEM_FAILURE,
  payload
});
