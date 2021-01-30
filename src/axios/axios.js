import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.ir/posts',
});
instance.interceptors.request.use(
  (request) => {
    console.log('request', request);
    return request;
  },
  (error) => {
    console.log('error', error);
  },
);
instance.interceptors.response.use(
  (response) => {
    console.log('response', response);
    return response;
  },
  (error) => {
    console.log('error', error);
  },
);
export default instance;
