import React, { FC } from 'react';
import { useStyles } from './styles';
import { ERoutes } from '../../types/enums';
import { useLocation, NavLink } from 'react-router-dom';
import { ISearchItem } from 'src/store/search/types';

interface ISearchItemProps {
  searchItem: ISearchItem;
}

export const SearchItem: FC<ISearchItemProps> = ({
  searchItem
}: ISearchItemProps) => {
  const styles = useStyles();
  const location = useLocation();
  const { name, films }: ISearchItem = searchItem;

  return (
    <li className={styles.searchItem}>
      <NavLink
        className={(navData) => (navData.isActive ? 'active' : '')}
        to={`${ERoutes.search}/${name}${location.search}`}
      >
        {name} - {films.length} films
      </NavLink>
    </li>
  );
};
