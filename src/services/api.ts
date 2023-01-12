import axios from 'axios';
import { ISearchItem } from 'src/store/search-item/types';

export const getSearchItems = (query: string, page: number) => {
  return axios.get(
    `${process.env.REACT_APP_API}/people/?search=${query}&page=${page}`
  );
};

export const getSearchItem = (urls: string[]) =>
  Promise.all(
    urls.reduce((acc: Promise<ISearchItem>[], next: string) => {
      acc.push(axios.get(next));
      return acc;
    }, [])
  );
