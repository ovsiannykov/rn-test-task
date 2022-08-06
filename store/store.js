import { createStore, combineReducers } from 'redux';

import postsReducer from './posts/posts-reducer';

const reducers = combineReducers({
  postsReducer,
});

const store = createStore(reducers);

export default store;
