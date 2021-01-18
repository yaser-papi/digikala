import React from 'react';
import {ScrollView} from 'react-native';
import KalaOne from '../component/category_page/KalaOne';
import KalaThree from '../component/category_page/KalaThree';
import KalaTwo from '../component/category_page/KalaTwo';
import My_Header from '../component/header_page/header';
import {useNavigation} from 'react-navigation-hooks';

const Category = () => {
  const {getParam} = useNavigation();
  let props = {
    head_name: 'Main',
    head_page_name: getParam('header_name'),
  };
  return (
    <ScrollView>
      <My_Header {...props} />
      <KalaOne />
      <KalaTwo />
      <KalaThree />
    </ScrollView>
  );
};

export default React.memo(Category);
