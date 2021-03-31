import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import categoryReducer from './homepage-collection/homepage-collection.reducer';
import scheduleReducer from './schedule/schedule.reducer';
import shopReducer from './shop/shop.reducer';
import scaledReducer from './scaled-product/scaled-product.reducer';
import likeReducer from './like/like.reducer';
import cartReducer from './cart/cart.reducer';
import styleReducer from './global-styles/global-styles.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['schedule', 'like', 'cart'],
};

const rootReducer = combineReducers({
  category: categoryReducer,
  schedule: scheduleReducer,
  shop: shopReducer,
  scaled: scaledReducer,
  like: likeReducer,
  cart: cartReducer,
  styles: styleReducer
});

export default persistReducer(persistConfig, rootReducer);
