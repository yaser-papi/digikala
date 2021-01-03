import React from 'react';
import {Text, Image, View, StyleSheet, Dimensions} from 'react-native';
import Ripple from 'react-native-material-ripple';
import {off_page_list} from '../../data/dataArray';

const w = Dimensions.get('window').width;

const OfferPage = () => {
  return (
    <View style={styles.container}>
      {off_page_list.map((item, key) => (
        <Ripple style={styles.box}>
          <View style={styles.box_img}>
            <Image style={styles.img} source={{uri: item.img}} />
          </View>
          <View style={styles.box_price}>
            <Text style={styles.old_price}>{item.o_price} تومان</Text>
            <Text style={styles.new_price}>{item.n_price} تومان</Text>
          </View>
        </Ripple>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  box: {
    backgroundColor: '#fff',
    marginTop: 25,
    width: w / 1.12,
    height: w + 30,
  },
  box_img: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  img: {width: '90%', height: '90%'},
  box_price: {
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1.5,
    borderTopColor: '#ddd',
    padding: 10,
  },
  old_price: {
    color: '#f00',
    fontSize: 17,
  },
  new_price: {
    color: '#008800',
    fontSize: 17,
  },
});

export default React.memo(OfferPage);
