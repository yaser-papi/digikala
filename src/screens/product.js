import React from 'react';
import {ScrollView, View} from 'react-native';
import My_Header from '../component/header_page/header';
import Slider from '../component/product_page/Slider';
import Name from '../component/product_page/name';
import Buttons from '../component/product_page/buttons';
import Warranty from '../component/product_page/warranty';
import Disc from '../component/product_page/disc';
import Rating from '../component/product_page/rating';
import Category from '../component/product_page/category';
import Por_simi from '../component/product_page/por_simi';
import Por_others_buy from '../component/product_page/por_others_buy';
import {useNavigation} from 'react-navigation-hooks';

const Product = () => {
  const {getParam} = useNavigation();
  let props = {
    head_name: 'Main',
    head_page_name: getParam('header_name'),
  };
  return (
    <ScrollView style={{backgroundColor: '#eee'}}>
      <My_Header {...props} />
      <Slider />
      <Name />
      <View style={{marginHorizontal: 13}}>
        <Buttons />
        <Warranty />
        <Disc />
        <Rating />
      </View>
      <Category />
      <Por_simi />
      <Por_others_buy />
    </ScrollView>
  );
};

export default React.memo(Product);
