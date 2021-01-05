import React from 'react';
import My_Header from '../component/header_page/header';
import {ScrollView} from 'react-native';
import Slider from '../component/main_page/slider';
import Category from '../component/main_page/category';
import Offer from '../component/main_page/offer';
import Off from '../component/main_page/off';
import KalaOne from '../component/main_page/KalaOne';
import KalaTwo from '../component/main_page/KalaTwo';
import Amazing from '../component/main_page/amazing';

let props = {
  head_name: 'Main',
};

const Main = () => {
  return (
    <ScrollView>
      <My_Header {...props} />
      <Slider />
      <Category />
      <Amazing />
      <Offer />
      <Off />
      <KalaOne />
      <KalaTwo />
    </ScrollView>
  );
};

export default React.memo(Main);
