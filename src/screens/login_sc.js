import React from 'react';
import {View} from 'react-native';
import Login from '../component/Login_page/login';

const Login_sc = () => {
  return (
    <View>
      <Login />
    </View>
  );
};

export default React.memo(Login_sc);
