import axios from "axios";
import authActions from "./auth-actions";

axios.defaults.baseURL = "https://localhost:8080";

const axiosToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = function (credentials) {
  authActions.registerRequest();

  axios
    .post("/fandom/users", credentials)
    .then((res) => authActions.registerSuccess(res.data))
    .catch((error) => authActions.registerError(error));
};

const login = async function (credentials) {
  authActions.loginRequest();

  try {
    const res = await axios.patch("/fandom/users", credentials);
    const { token, user } = res.data;
    const { name, subscription } = user;
    axiosToken.set(token);

    authActions.loginSuccess({ name, subscription });
  } catch (error) {
    authActions.loginError(error);
  }
};

const logout = function () {
  authActions.logOutRequest();

  try {
    axios.post("/auth/logout");
    axiosToken.unset();
    authActions.logOutSuccess();
  } catch (error) {
    authActions.logOutError(error.message);
  }
};

const authOperations = {
  register,
  logout,
  login,
};

export default authOperations;
