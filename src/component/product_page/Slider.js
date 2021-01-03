import React from 'react';
import {Dimensions, StyleSheet, View, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import {kala_list1} from '../../data/dataArray';

const w = Dimensions.get('window').width;

const Slider = () => {
  return (
    <View style={styles.container}>
      <Swiper>
        {kala_list1.map((item, index) => (
          <View>
            <Image
              resizeMode={'contain'}
              style={styles.img}
              source={{uri: item.image}}
            />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: w,
    height: w / 1.5,
    backgroundColor: '#fff',
  },
  img: {
    width: '100%',
    height: '100%',
  },
});

export default React.memo(Slider);
