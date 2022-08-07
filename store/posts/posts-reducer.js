import { postsActionTypes } from './posts-actions';

const initialState = {
  posts: null,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case postsActionTypes.SET_POSTS:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

export default postsReducer;
