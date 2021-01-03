import React from 'react';
import {ScrollView} from 'react-native';
import OfferPage from '../component/offer_page/OfferPage';

const Off = () => {
  return (
    <ScrollView style={{backgroundColor: '#ddd'}}>
      <OfferPage />
    </ScrollView>
  );
};

export default React.memo(Off);
