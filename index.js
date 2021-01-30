/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import axios from 'axios';

// axios.defaults.baseURL = 'https://digikala.liara.run/graphql';
// axios.defaults.headers.common['Authorization'] = 'uahfuhr';
// axios.defaults.headers.post['Content-Type'] = 'application/jason';
// axios.defaults.headers.post['Accept'] = 'application/jason';
// axios.interceptors.request.use(
//   (request) => {
//     // console.log('request', request);
//     return request;
//   },
//   (error) => {
//     console.log('error', error);
//   },
// );

// axios.interceptors.response.use(
//   (response) => {
//     // console.log('response', response);
//     return response;
//   },
//   (error) => {
//     console.log('error', error);
//   },
// );

AppRegistry.registerComponent(appName, () => App);
