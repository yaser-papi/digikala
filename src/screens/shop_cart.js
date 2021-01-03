import React from 'react';
import {ScrollView} from 'react-native';
import Shop_box from '../component/shop_cart/shop_box';

const Shop_cart = () => {
  return (
    <ScrollView>
      <Shop_box />
    </ScrollView>
  );
};

export default React.memo(Shop_cart);
