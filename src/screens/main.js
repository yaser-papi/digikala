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

let props = {
  head_name: 'Main',
};

const Main = () => {
  useEffect(() => {
    // axios({
    //   url: '/',
    //   method: 'post',
    //   data: {
    //     query: `
    //     query MainPageApp{
    //       MainPageApp{
    //         slider{
    //           image{
    //             _id,
    //             dir
    //           }
    //         }
    //       }
    //     }
    //     `,
    //   },
    // })
    //   .then((response) => {
    //     console.log('response', response.data);
    //   })
    //   .catch((error) => console.log('error', error));
  });

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
