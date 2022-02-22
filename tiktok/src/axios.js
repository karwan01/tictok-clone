import axios from "axios";

const instance = axios.create({
  baseURL: "https://karwan-tiktok-mern.herokuapp.com/",
});

export default instance;
