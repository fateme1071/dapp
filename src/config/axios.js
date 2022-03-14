import axios from "axios";

const instance = axios.create({
  baseURL: "https://base.url/"
});

export default instance;
