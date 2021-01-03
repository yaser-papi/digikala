import React from 'react';
import {View} from 'react-native';
import Search from '../component/search_page/search';

const Search_sc = () => {
  return (
    <View>
      <Search />
    </View>
  );
};

export default React.memo(Search_sc);
