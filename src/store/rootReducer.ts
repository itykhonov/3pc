import { combineReducers } from 'redux';
import searchReducer from './search/reducer';
import searchItemReducer from './search-item/reducer';

const rootReducer = combineReducers({
  searchItem: searchItemReducer,
  search: searchReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
