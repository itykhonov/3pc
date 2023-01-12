import React, {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  useCallback,
  useMemo
} from 'react';
import { useStyles } from './styles';
import debounce from 'lodash.debounce';

export interface IProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export const Search: FC<IProps> = ({ searchValue, setSearchValue }: IProps) => {
  const styles = useStyles();

  const debouncedSearch = useMemo(
    () =>
      debounce((val) => {
        setSearchValue(val);
      }, 200),
    [setSearchValue]
  );

  const onChangeSearchInput = useCallback(
    (
      event:
        | ChangeEventHandler<HTMLInputElement>
        | ChangeEvent<HTMLInputElement>
    ) => {
      const searchValue: string = (event as ChangeEvent<HTMLInputElement>)
        .target.value;
      debouncedSearch(searchValue);
    },
    [debouncedSearch]
  );

  return (
    <div className={styles.searchInputHolder}>
      <input
        type="search"
        className="search-input"
        placeholder="Search input"
        onChange={onChangeSearchInput}
        value={searchValue}
      />
    </div>
  );
};
