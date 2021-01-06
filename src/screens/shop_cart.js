import React from 'react';
import {ScrollView} from 'react-native';
import My_Header from '../component/header_page/header';
import Shop_box from '../component/shop_cart/shop_box';

let props = {
  head_name: 'Shop',
};

const Shop_cart = () => {
  return (
    <ScrollView>
      <My_Header {...props} />
      <Shop_box />
    </ScrollView>
  );
};

export default React.memo(Shop_cart);
