const getIsAuthenticated = (state) => state.auth.isAuthenticated;
const getUserBalance = (state) => state.operations.balance;
const getToken = (state) => state.auth.token;
const getName = (state) => state.auth.user.name;
const getIsNotVerified = (state) => state.auth.user.isNotVerified;

export default {
  getIsAuthenticated,
  getUserBalance,
  getToken,
  getName,
  getIsNotVerified,
};
