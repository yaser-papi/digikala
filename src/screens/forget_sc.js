import React from 'react';
import {View} from 'react-native';
import My_Header from '../component/header_page/header';
import Forget from '../component/forget_page/forget';

let props = {
  head_name: 'Forget',
  head_page_name: '  تایید شماره تلفن  ',
};
const Forget_sc = () => {
  return (
    <View>
      <My_Header {...props} />
      <Forget />
    </View>
  );
};

export default React.memo(Forget_sc);
