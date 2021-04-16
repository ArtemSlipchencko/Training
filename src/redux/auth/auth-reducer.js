import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authActions from "./auth-actions";

const initialUserState = { name: null, subscription: null };

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (_, { payload }) => payload,
  [authActions.loginSuccess]: (_, { payload: { token, ...rest } }) => rest,
  [authActions.logOutSuccess]: () => initialUserState,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.logOutSuccess]: () => null,
});

export default combineReducers({
  user,
  token,
});
