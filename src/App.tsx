import React, { FC } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { SearchItemPage } from './pages/search-item-page';
import { SearchPage } from './pages/search-page';
import { useStyles } from './styles';
import { ERoutes } from './types/enums';

const App: FC = () => {
  useStyles();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={ERoutes.search} replace />} />
        <Route path={ERoutes.search} element={<SearchPage />}>
          <Route path={ERoutes.searchItemPage} element={<SearchItemPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
