import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {kala_list1} from '../../data/dataArray';

const w = Dimensions.get('window').width;

const Por_others_buy = () => {
  return (
    <View>
      <View style={styles.head_view}>
        <Text style={styles.head_text_r}>محصولاتی که دیگران خرید کرده اند</Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={kala_list1}
        renderItem={({item, index}) => (
          <View style={styles.kala}>
            <Image
              style={styles.img_kala}
              source={{
                uri: item.image,
              }}
              resizeMode={'contain'}
            />

            <View style={styles.view_nam}>
              <Text style={styles.nam_kala}>{item.name}</Text>
            </View>

            <View style={styles.view_prc}>
              <Text style={styles.prc_kala}>{item.price}تومان</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  head_view: {
    padding: 10,
  },
  head_text_l: {
    fontSize: 14,
    color: '#05f',
  },
  head_text_r: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  kala: {
    width: w / 3,
    height: w / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  img_kala: {
    width: '90%',
    height: '60%',
  },
  view_nam: {
    marginTop: 15,
  },
  nam_kala: {
    fontSize: 16,
  },
  view_prc: {
    borderTopWidth: 1,
    padding: 5,
  },
  prc_kala: {
    color: '#091',
  },
});

export default React.memo(Por_others_buy);
