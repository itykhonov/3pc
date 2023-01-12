import React, { FC, useEffect } from 'react';
import { useStyles } from './styles';
import {
  useGetSearchItems,
  useSelectSearchItems,
  useSelectSearchItemsLoading,
  useSelectSearchItemsCurrentPage,
  useSelectSearchItemsPagesCount,
  useSelectSearchString,
  useSelectSearchLimit
} from 'src/store/search/hooks';
import ReactPaginate from 'react-paginate';
import { Search } from './search';
import { SearchItem } from './searchItem';
import { Outlet } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { ERoutes } from 'src/types/enums';
import classnames from 'classnames';

export const SearchPage: FC = () => {
  const styles = useStyles();
  const searchItems = useSelectSearchItems();
  const search = useGetSearchItems();
  const pagesCount = useSelectSearchItemsPagesCount();
  const loading = useSelectSearchItemsLoading();
  const limit = useSelectSearchLimit();
  const navigate = useNavigate();
  const currentPage = useSelectSearchItemsCurrentPage();
  const currentSearchValue = useSelectSearchString();

  useEffect(() => {
    search(currentSearchValue, currentPage);
  }, [currentSearchValue, currentPage, search]);

  const handlePageClick = ({ selected }: { selected: number }) => {
    navigate(
      `${ERoutes.search}?search=${currentSearchValue}&page=${selected + 1}`
    );
  };

  const handleSearch = (searchValue: string) => {
    navigate(`${ERoutes.search}?search=${searchValue}&page=1`);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Star wars app</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.column}>
          <div className="column-holder">
            <Search
              searchValue={currentSearchValue}
              setSearchValue={handleSearch}
            />
            <div className={styles.searchResultsHolder}>
              {!loading && searchItems && searchItems.length > 0 && (
                <ul className={styles.searchResultsContainer}>
                  {searchItems.map((searchItem) => (
                    <SearchItem key={searchItem.name} searchItem={searchItem} />
                  ))}
                </ul>
              )}
              {loading && <div className={styles.loading}>Loading ...</div>}
              {pagesCount > 1 && (
                <div
                  className={classnames(styles.paginationHolder, { loading })}
                >
                  <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={pagesCount}
                    forcePage={currentPage - 1}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                    renderOnZeroPageCount={() => null}
                  />
                </div>
              )}
            </div>

            {!loading &&
              searchItems &&
              searchItems.length === 0 &&
              limit > 0 && (
                <div className={styles.noResults}>No results found</div>
              )}
          </div>
        </div>
        <div className={styles.column}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};
