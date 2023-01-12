import { IGeneralMessage, IGeneralMessageResponse } from 'src/types/global';
import {
  GET_SEARCH_ITEMS_FAILURE,
  GET_SEARCH_ITEMS_REQUEST,
  GET_SEARCH_ITEMS_SUCCESS
} from './actionTypes';

export interface ISearchItem {
  name: string;
  films: string[];
}

export interface ISearchItems {
  searchItems: Record<string, ISearchItem>;
}

export interface ISearchItemsState {
  data: ISearchItems;
  loading: boolean;
  error: IGeneralMessage;
  pagesCount: number;
  limit: number;
}

export interface ISearchItemsRequestPayload {
  searchString: string;
  page: number;
}

export interface ISearchItemsSuccessPayload {
  data: ISearchItems;
  pagesCount: number;
  limit: number;
}

export interface ISearchItemsFailurePayload {
  error: IGeneralMessageResponse;
}

export type GetSearchItemsRequestType = {
  type: typeof GET_SEARCH_ITEMS_REQUEST;
  payload: ISearchItemsRequestPayload;
};

export type GetSearchItemsSuccessType = {
  type: typeof GET_SEARCH_ITEMS_SUCCESS;
  payload: ISearchItemsSuccessPayload;
};

export type GetSearchItemsFailureType = {
  type: typeof GET_SEARCH_ITEMS_FAILURE;
  payload: ISearchItemsFailurePayload;
};

export type SearchActionsTypes =
  | GetSearchItemsRequestType
  | GetSearchItemsSuccessType
  | GetSearchItemsFailureType;
