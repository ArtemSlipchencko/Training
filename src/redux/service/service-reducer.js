import { createReducer } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
import serviceActions from "./service-actions";

const init = { posts: [], loader: false, error: "" };

const service = createReducer(init, {
  [serviceActions.getPostsRequest]: (state, action) => {
    state.loader = true;
  },
  [serviceActions.getPostsSuccess]: (state, { payload }) => ({ posts: [...payload], loader: false, error: "" }),
  [serviceActions.getPostsError]: (state, { payload }) => ({ posts: state.posts ? [...state.posts] : [], loader: false, error: payload })
});

export default service;
