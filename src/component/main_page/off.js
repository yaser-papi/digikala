import React from 'react';
import {Image, StyleSheet, Dimensions} from 'react-native';
import Ripple from 'react-native-material-ripple';
// import {withNavigation} from 'react-navigation';
import {off_list} from '../../data/dataArray';

const w = Dimensions.get('window').width;

const Off = (props) => {
  // console.log('props', props);
  return (
    <Ripple
      style={styles.btn}
      // onPress={() => {
      //   props.navigation.navigate('Category', {name: 'yaser'});
      // }}
    >
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

// const off = withNavigation(Off);

export default React.memo(Off);
