/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import axios from 'axios';

axios.interceptors.response.use(
  (response) => {
    console.log('response', response);
    return response;
  },
  (error) => {
    console.log('error', error);
  },
);

AppRegistry.registerComponent(appName, () => App);
