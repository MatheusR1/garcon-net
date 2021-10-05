import axios from "axios";
import {API_KEY} from '@env';

const api = axios.create({
    baseURL: API_KEY,
    timeout: 50000,
})

api.defaults.headers.common['Content-Type'] = 'application/json';

export default api;