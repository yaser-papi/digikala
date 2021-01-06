import React from 'react';
import {View} from 'react-native';
import My_Header from '../component/header_page/header';
import Signup from '../component/signup_page/login';
let props = {
  head_name: 'Main',
  head_page_name: '  ثبت نام  ',
  head_page_icon: 'close',
  head_page_icon_color: '#555',
};

const SignUp = () => {
  return (
    <View>
      <My_Header {...props} />
      <Signup />
    </View>
  );
};

export default React.memo(SignUp);
