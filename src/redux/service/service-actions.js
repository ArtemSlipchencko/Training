import { createAction } from "@reduxjs/toolkit";

const getPostsRequest = createAction("service/getPostsRequest");
const getPostsSuccess = createAction("service/getPostsSuccess");
const getPostsError = createAction("service/getPostsError");

const serviceActions = {
  getPostsRequest,
  getPostsSuccess,
  getPostsError,
};

export default serviceActions;
