import { IGeneralMessage, IGeneralMessageResponse } from 'src/types/global';
import {
  GET_SEARCH_ITEM_FAILURE,
  GET_SEARCH_ITEM_REQUEST,
  GET_SEARCH_ITEM_SUCCESS
} from './actionTypes';

export interface ISearchItem {
  release_date: string;
  title: string;
}

export interface ISearchItemState {
  data: ISearchItem[] | undefined;
  loading: boolean;
  error: IGeneralMessage;
}

export interface ISearchItemRequestPayload {
  urls: string[];
}

export interface ISearchItemSuccessPayload {
  data: ISearchItem[] | undefined;
}

export interface ISearchItemFailurePayload {
  error: IGeneralMessageResponse;
}

export type GetSearchItemRequestType = {
  type: typeof GET_SEARCH_ITEM_REQUEST;
  payload: ISearchItemRequestPayload;
};

export type GetSearchItemSuccessType = {
  type: typeof GET_SEARCH_ITEM_SUCCESS;
  payload: ISearchItemSuccessPayload;
};

export type GetSearchItemFailureType = {
  type: typeof GET_SEARCH_ITEM_FAILURE;
  payload: ISearchItemFailurePayload;
};

export type SearchItemActionsTypes =
  | GetSearchItemRequestType
  | GetSearchItemSuccessType
  | GetSearchItemFailureType;
