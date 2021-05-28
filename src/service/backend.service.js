import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

class Backend {
  setToken(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  unsetToken() {
    axios.defaults.headers.common.Authorization = ``;
  }

  async getPosts() {
    return await axios.get("/article/posts");
  }
}

export default new Backend();
