import React from 'react';
import {Image, StyleSheet, Dimensions} from 'react-native';
import Ripple from 'react-native-material-ripple';
import {off_list} from '../../data/dataArray';
import {useNavigation} from 'react-navigation-hooks';

const w = Dimensions.get('window').width;

const Off = () => {
  const {navigate} = useNavigation();

  return (
    <Ripple style={styles.btn} onPress={() => navigate('Off')}>
      {off_list.map((item, index) => (
        <Image style={styles.img} source={{uri: item.img}} key={index} />
      ))}
    </Ripple>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    height: w / 3.2,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#f00',
  },
  img: {
    width: '100%',
    height: '100%',
  },
});

export default React.memo(Off);
