import axios from "axios";

export const http = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:4000/api/v1/",
});
