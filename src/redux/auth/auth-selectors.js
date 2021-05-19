const getToken = (state) => state.auth.token;
const getName = (state) => state.auth.user.name;

const authSelectors = {
  getToken,
  getName,
};

export default authSelectors;
