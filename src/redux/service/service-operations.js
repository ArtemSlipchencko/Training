import axios from "axios";
import serviceActions from "./service-actions";

const getPosts = () => async (dispatch) => {
  dispatch(serviceActions.getPostsRequest());

  try {
    const res = await axios.get("/article/posts");
    const { data } = res;
    dispatch(serviceActions.getPostsSuccess(data));
  } catch (error) {
    dispatch(serviceActions.getPostsError(error));
  }
};

export default getPosts;
