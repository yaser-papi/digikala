import React from 'react';
import {View, Text, StyleSheet, Image, Alert, Dimensions} from 'react-native';
// import {Picker as Pc} from '@react-native-picker/picker';
import {box_shop} from '../../data/dataArray';

const w = Dimensions.get('window').width;

const Shop_box = () => {
  delet_alert = () => {
    Alert.alert(
      'آیا مایل به حذف هستید؟',
      '',
      [
        {text: 'خیر', onPress: () => console.log('Cancel Pressed')},
        {text: 'بله', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.container}>
      {box_shop.map((item, key) => (
        <View style={styles.ch_container} key={key}>
          <View style={styles.sec1}>
            <View style={styles.container_left}>
              <Text>{item.e_name}</Text>
              <Text>{item.p_name}</Text>
              <View style={styles.box_color}>
                <View
                  style={[styles.icon_color, {backgroundColor: item.rgb_clr}]}
                />
                <Text>{item.txt_clr}</Text>
                <Text>رنگ:</Text>
              </View>
              <View style={styles.box_varr}>
                <Text>{item.warr}</Text>
                <Text>گارانتی:</Text>
              </View>
              <View style={styles.box_shoper}>
                <Text>{item.seler}</Text>
                <Text>فروشنده:</Text>
              </View>
              <View style={styles.box_num}>
                {/* <Pc style={{height: 30, width: 50}} mode="dropdown">
                  <Pc.Item label={item.number} value={item.number} />
                </Pc> */}
                <Text>تعداد:</Text>
              </View>
            </View>
            <View style={styles.container_right}>
              <Image
                resizeMode={'contain'}
                style={styles.img}
                source={{uri: item.img}}
              />
            </View>
          </View>

          <View>
            <View style={styles.totol}>
              <Text>{item.sum_p} تومان</Text>
              <Text>قیمت کل</Text>
            </View>
            <View style={styles.totol}>
              <Text>{item.end_p} تومان</Text>
              <Text>قیمت نهایی</Text>
            </View>
            <View style={[styles.totol, {backgroundColor: '#fff'}]}>
              <Text style={{padding: 5}} onPress={() => delet_alert()}>
                حذف
              </Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  ch_container: {
    height: w / 1.2,
    backgroundColor: '#fff',
    elevation: 3,
    borderRadius: 2,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  sec1: {
    flexDirection: 'row',
    padding: 15,
  },
  container_left: {
    width: '80%',
    alignItems: 'flex-end',
  },
  box_color: {
    flexDirection: 'row',
    marginTop: 10,
    // justifyContent: 'center',
  },
  icon_color: {
    width: 15,
    height: 15,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 0.8,
    borderRadius: 8,
  },
  box_varr: {
    flexDirection: 'row',
    marginTop: 10,
  },
  box_shoper: {
    flexDirection: 'row',
    marginTop: 10,
  },
  box_num: {
    flexDirection: 'row',
    marginTop: 10,
  },
  container_right: {
    width: '20%',
    height: '50%',
    marginLeft: 10,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  totol: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#efefef',
    borderTopColor: '#ccc',
    borderTopWidth: 0.6,
  },
});

export default React.memo(Shop_box);
