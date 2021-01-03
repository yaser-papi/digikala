import React from 'react';
import {ScrollView} from 'react-native';
import KalaOne from '../component/category_page/KalaOne';
import KalaThree from '../component/category_page/KalaThree';
import KalaTwo from '../component/category_page/KalaTwo';

const Category = (props) => {
  return (
    <ScrollView>
      <KalaOne />
      <KalaTwo />
      <KalaThree />
    </ScrollView>
  );
};

export default React.memo(Category);
