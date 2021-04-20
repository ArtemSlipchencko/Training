import axios from "axios";

axios.defaults.baseURL = "https://kapusta-srv.herokuapp.com";

class Backend {
  setToken(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  unsetToken() {
    axios.defaults.headers.common.Authorization = ``;
  }
}

export default new Backend();
