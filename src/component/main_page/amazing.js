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
import CountDown from 'react-native-countdown-component';

const w = Dimensions.get('window').width;

const Amazing = () => {
  return (
    <View>
      <View style={styles.head_view}>
        <CountDown
          until={24 * 60 * 60}
          size={14}
          onFinish={() => {
            console.log('done');
          }}
          digitStyle={{backgroundColor: '#f00'}}
          digitTxtStyle={{color: '#fff'}}
          timeToShow={['H', 'M', 'S']}
          timeLabels={{m: '', s: ''}}
          showSeparator={true}
        />

        <Text style={styles.head_text_r}>
          پیشنهاد{' '}
          <Text style={[styles.head_text_r, {color: '#ff2424'}]}>
            شگفت انگیز
          </Text>
        </Text>
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
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
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

export default React.memo(Amazing);
