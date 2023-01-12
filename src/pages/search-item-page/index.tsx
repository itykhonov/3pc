import React, { FC, useEffect, useMemo, useState } from 'react';
import {
  useGetSearchItem,
  useSelectSearchItem,
  useSelectSearchItemLoading,
  useSelectRouterPathSearchItemID
} from 'src/store/search-item/hooks';
import { ISearchItem } from 'src/store/search-item/types';
import { Filter, IOption } from './filter';
import { useStyles } from './styles';

export const SearchItemPage: FC = () => {
  const styles = useStyles();
  const searchItemId = useSelectRouterPathSearchItemID();
  const searchItems: ISearchItem[] | undefined = useSelectSearchItem();
  const loading: boolean = useSelectSearchItemLoading();
  const getSearchItem = useGetSearchItem();
  const [sortValue, setSortValue] = useState('');

  const sortedItems = useMemo(() => {
    switch (sortValue) {
      case 'name':
        return searchItems?.sort((a: ISearchItem, b: ISearchItem) =>
          a.title.localeCompare(b.title)
        );
      case 'year':
        return searchItems?.sort(
          (a: ISearchItem, b: ISearchItem) =>
            new Date(a.release_date).getTime() -
            new Date(b.release_date).getTime()
        );
      default:
        return searchItems;
    }
  }, [sortValue, searchItems]);

  const sortOptions: IOption[] = [
    { value: 'name', label: 'Movie name' },
    { value: 'year', label: 'Movie year' }
  ];

  const setSortValueHandler = (option: IOption) => {
    setSortValue(option.value);
  };

  useEffect(() => {
    if (searchItemId) {
      getSearchItem(searchItemId);
    }
  }, [getSearchItem, searchItemId]);

  if (loading) {
    return (
      <div className="column-holder">
        <div className={styles.loading}>Loading...</div>
      </div>
    );
  }

  if (!sortedItems) {
    return null;
  }

  if (sortedItems.length === 0) {
    return (
      <div className="column-holder">
        <div className={styles.noResults}>
          Did not find items by the id = {searchItemId}
        </div>
      </div>
    );
  }

  return (
    <div className="column-holder">
      <div className={styles.sortHolder}>
        <Filter
          options={sortOptions}
          placeholder="Sort by"
          setFilterValue={setSortValueHandler}
        />
      </div>
      <ul className={styles.itemsList}>
        {sortedItems.map(({ title, release_date }: ISearchItem) => (
          <li key={title}>
            {title} - {release_date}
          </li>
        ))}
      </ul>
    </div>
  );
};
