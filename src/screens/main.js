import React from 'react';
import {ScrollView} from 'react-native';
import Slider from '../component/main_page/slider';
import Catigory from '../component/main_page/category';
import Offer from '../component/main_page/offer';
import Off from '../component/main_page/off';
import KalaOne from '../component/main_page/KalaOne';
import KalaTwo from '../component/main_page/KalaTwo';
import Amazing from '../component/main_page/amazing';

const Main = () => {
  return (
    <ScrollView>
      <Slider />
      <Catigory />
      <Amazing />
      <Offer />
      <Off />
      <KalaOne />
      <KalaTwo />
    </ScrollView>
  );
};

export default React.memo(Main);
