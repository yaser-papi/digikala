import React, {useEffect} from 'react';
import axios from 'axios';
import My_Header from '../component/header_page/header';
import {ScrollView} from 'react-native';
import Slider from '../component/main_page/slider';
import Category from '../component/main_page/category';
import Offer from '../component/main_page/offer';
import Off from '../component/main_page/off';
import KalaOne from '../component/main_page/KalaOne';
import KalaTwo from '../component/main_page/KalaTwo';
import Amazing from '../component/main_page/amazing';
import {Button, Text} from 'native-base';

let props = {
  head_name: 'Main',
};

const Main = () => {
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.ir/posts')
      .then((response) => console.log('response.data', response.data));
    // .catch(error)(console.log('error', error));
  });
  const buttonHandler = async () => {
    axios
      .get('https://jsonplaceholder.ir/posts')
      .then((response) => console.log('response.data', response.data))
      .catch(error)(console.log('error', error));
  };
  // axios}

  //   .get('https://jsonplaceholder.ir/posts/50')
  //   .then((response) => {
  //     console.log('response.data', response.data);
  //   })
  //   .catch((error) => console.log('error', error));

  return (
    // <ScrollView>
    //   <My_Header {...props} />
    //   <Slider />
    //   <Category />
    //   <Amazing />
    //   <Offer />
    //   <Off />
    //   <KalaOne />
    //   <KalaTwo />
    // </ScrollView>
    <Button onPress={buttonHandler}>
      <Text>click</Text>
    </Button>
  );
};

export default React.memo(Main);
