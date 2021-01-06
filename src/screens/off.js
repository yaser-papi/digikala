import React from 'react';
import {ScrollView} from 'react-native';
import My_Header from '../component/header_page/header';
import OfferPage from '../component/offer_page/OfferPage';
let props = {
  head_name: 'Main',
  head_page_name: 'off',
  head_page_icon: 'arrow-forward',
};
const Off = () => {
  return (
    <ScrollView style={{backgroundColor: '#ddd'}}>
      <My_Header {...props} />
      <OfferPage />
    </ScrollView>
  );
};

export default React.memo(Off);
