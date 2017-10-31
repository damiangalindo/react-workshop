import axios from 'axios';

const axiosRequest = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

axiosRequest.defaults.params = {};
axiosRequest.defaults.params['api_key'] = 'b7c058b14cadc627c604777ebe13e8dd';

export default axiosRequest;