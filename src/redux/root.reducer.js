import { combineReducers } from 'redux';

import categoryReducer from './homepage-collection/homepage-collection.reducer';

const rootReducer = combineReducers({
  category: categoryReducer,
});

export default rootReducer;
