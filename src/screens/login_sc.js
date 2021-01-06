import React from 'react';
import {View} from 'react-native';
import My_Header from '../component/header_page/header';
import Login from '../component/Login_page/login';

let props = {
  head_name: 'Main',
  head_page_name: '  ورود  ',
  head_page_icon: 'close',
  head_page_icon_color: '#555',
};

const Login_sc = () => {
  return (
    <View>
      <My_Header {...props} />
      <Login />
    </View>
  );
};

export default React.memo(Login_sc);
