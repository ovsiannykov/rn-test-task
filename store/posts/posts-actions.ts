export const postsActionTypes = {
  SET_POSTS: 'POSTS.SET_POSTS',
};

export const postsActions = {
  setPosts: (payload: unknown) => ({ type: postsActionTypes.SET_POSTS, payload }),
};
