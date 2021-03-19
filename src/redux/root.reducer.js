import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import categoryReducer from './homepage-collection/homepage-collection.reducer';
import scheduleReducer from './schedule/schedule.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['schedule'],
};

const rootReducer = combineReducers({
  category: categoryReducer,
  schedule: scheduleReducer,
});

export default persistReducer(persistConfig, rootReducer);
