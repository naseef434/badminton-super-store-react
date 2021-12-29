import axios from "axios";

const BaseUrl = process.env.REACT_APP_BASE_URL;

export const urlGateWay = axios.create({
  baseURL: BaseUrl,
  timeout: 10000,
  // headers: { 'X-Custom-Header': 'foobar' }
});

urlGateWay.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers = {
    ...config.headers,
    Authorization: token ? `Bearer ${token}` : null,
  };
  return config;
});

urlGateWay.interceptors.response.use(
  (res) => {
    return res;
  },
  function (res) {
    if (res.response && res.response.status === 401) {
      localStorage.clear();
      window.location.href = "/";
    }
    return res;
  }
);
