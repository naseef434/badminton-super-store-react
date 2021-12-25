import axios from "axios"

const BaseUrl = process.env.REACT_APP_BASE_URL

export const urlGateWay = axios.create({
    baseURL: BaseUrl,
    timeout: 10000,
    // headers: { 'X-Custom-Header': 'foobar' }
});