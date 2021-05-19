import axios from "axios";
import authActions from "./auth-actions";

axios.defaults.baseURL = "http://localhost:8080";

const axiosToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = (credentials) => async (dispatch) => {
  dispatch(authActions.registerRequest());

  await axios
    .post("/fandom/users", credentials)
    .then((res) => {
      dispatch(authActions.registerSuccess(res.data));
    })
    .catch((error) => dispatch(authActions.registerError(error)));
};

const login = (credentials) => async (dispatch) => {
  dispatch(authActions.loginRequest());

  try {
    const res = await axios.patch("/fandom/users", credentials);
    const { token, user } = res.data;
    const { name, subscription } = user;
    axiosToken.set(token);
    dispatch(authActions.loginSuccess({ token, name, subscription }));
    
  } catch (error) {
    dispatch(authActions.loginError(error));
  }
};

const logout = () => async (dispatch) => {
  dispatch(authActions.logOutRequest());

  try {
    await axios.patch("/fandom/logout");

    dispatch(authActions.logOutSuccess());
    axiosToken.unset();
  } catch (error) {
    dispatch(authActions.logOutError(error.message));
  }
};

const current = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  axiosToken.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());

  try {
    const res = await axios.get("/fandom/user");
    const { name, subscription } = res.data;
    dispatch(authActions.getCurrentUserSuccess({ name, subscription }));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error));
  }
};

const authOperations = {
  register,
  logout,
  login,
  current,
};

export default authOperations;
