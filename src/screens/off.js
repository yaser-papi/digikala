import React from 'react';
import {ScrollView} from 'react-native';
import My_Header from '../component/header_page/header';
import Search from '../component/search_page/search';
let props = {
  head_name: 'Main',
  head_page_name: 'off',
  head_page_icon: 'arrow-forward',
};
const Off = () => {
  return (
    <ScrollView style={{backgroundColor: '#ddd'}}>
      <My_Header {...props} />
      <Search />
    </ScrollView>
  );
};

export default React.memo(Off);
