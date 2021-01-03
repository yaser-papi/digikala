import React from 'react';
import {View} from 'react-native';
import Forget from '../component/forget_page/forget';

const Forget_sc = () => {
  return (
    <View>
      <Forget />
    </View>
  );
};

export default React.memo(Forget_sc);
