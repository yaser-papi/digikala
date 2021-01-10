import React from 'react';
import {View} from 'react-native';
import My_Header from '../component/header_page/header';

let props = {
  head_name: 'Search',
};

const Search_sc = () => {
  return (
    <View>
      <My_Header {...props} />
    </View>
  );
};

export default React.memo(Search_sc);
