import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Fontisto';
import Iconss from 'react-native-vector-icons/FontAwesome';
import Ripple from 'react-native-material-ripple';
import {useNavigation} from 'react-navigation-hooks';

const w = Dimensions.get('window').width;

const colors = [
  {color: 'black', index: 1},
  {color: 'blue', index: 2},
  {color: 'brown', index: 3},
  {color: 'red', index: 4},
  {color: 'skyblue', index: 5},
  {color: 'orange', index: 6},
  {color: 'yellow', index: 7},
  {color: 'brown', index: 8},
];

const Warranty = () => {
  const {navigate} = useNavigation();
  // const [border_color, set_border_color] = useState('');
  const [index, setIndex] = useState(0);

  // const _changeBorderColor = (color) => {
  //   set_border_color(color);
  // };

  return (
    <View style={styles.container}>
      {/* ----------box titr & color & warranty ---------- */}
      <View>
        <View style={styles.box_titr}>
          <Text style={styles.c_rang}>سه رنگ</Text>
          <Text style={styles.rang}>رنگ</Text>
        </View>
        <View style={styles.box_colors}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {colors.map((color, i) => (
              <TouchableOpacity
                style={[
                  styles.box_color_w,
                  // border_color === '#aa5500' ? {borderColor: '#00f'} : {},
                  {
                    borderColor:
                      color.index === index ? color.color : 'transparent',
                  },
                ]}
                onPress={() => {
                  // _changeBorderColor('#aa5500');
                  setIndex(color.index);
                }}
                activeOpacity={1}>
                <View style={[styles.ball, {backgroundColor: color.color}]} />
                <Text style={styles.txt_cl}>{color.color}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          {/* <TouchableOpacity
            style={[
              styles.box_color_w,
              // border_color === '#aa5500' ? {borderColor: '#00f'} : {},
              {borderColor: index === 1 ? '#00f' : 'transparent'},
            ]}
            onPress={() => {
              _changeBorderColor('#aa5500');
              setIndex(1);
            }}
            activeOpacity={1}>
            <View style={[styles.ball, {backgroundColor: '#aa5500'}]} />
            <Text style={styles.txt_cl}>قهوه ای</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.box_color_w,
              // border_color === '#000000' ? {borderColor: '#00f'} : {},
              {borderColor: index === 2 ? '#00f' : 'transparent'},
            ]}
            onPress={() => {
              _changeBorderColor('#000000');
              setIndex(2);
            }}
            activeOpacity={1}>
            <View style={[styles.ball, {backgroundColor: '#000000'}]} />
            <Text style={styles.txt_cl}>مشکی</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.box_color_w,
              // border_color === '#fff' ? {borderColor: '#00f'} : {},
              {borderColor: index === 3 ? '#00f' : 'transparent'},
            ]}
            onPress={() => {
              _changeBorderColor('#fff');
              setIndex(3);
            }}
            activeOpacity={1}>
            <View style={[styles.ball, {backgroundColor: '#fff'}]} />
            <Text style={styles.txt_cl}>سفید</Text>
          </TouchableOpacity> */}
        </View>
        <View style={styles.box_note}>
          <Text style={styles.note_warr}>گارانتی 18 ماهه </Text>
          <Icon name="verified-user" size={22} color="#bbb" />
        </View>
      </View>
      {/* ----------box give & ready---------------------- */}
      <View style={styles.box_ready}>
        <View style={styles.ready}>
          <Text style={styles.note_ready}>فروش توسط دیجی تند</Text>
          <Icons name="shopping-store" size={20} color="#888" />
        </View>
        <View style={styles.ready}>
          <Text style={styles.note_ready}>
            آماده ارسال از انبار دیجی کالا
            <Text style={{color: '#f00'}}> تا 3 روز کاری آینده</Text>
          </Text>
          <Iconss name="truck" size={20} color="#888" />
        </View>
      </View>

      {/* ----------box price & buy----------------------------- */}
      <View style={styles.price_buy}>
        <Text style={styles.txt_price}>2500000</Text>
        <Ripple style={styles.btn_buy} onPress={() => navigate('Shop_cart')}>
          <Text style={styles.btn_txt}>افزودن به سبد خرید</Text>
          <Iconss name="truck" size={20} color="#888" />
        </Ripple>
      </View>
      {/* ----------box shops----------------------------------- */}
      <View style={styles.shops}>
        <Iconss name="truck" size={20} color="#888" />
        <Text>4 فروشنده و گارانتی برای این کالا وجود دارد</Text>
        <Iconss name="truck" size={20} color="#888" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: null,
    height: null,
    backgroundColor: '#fff',
    padding: 13,
    elevation: 4,
  },
  box_titr: {
    width: '100%',
    height: w / 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rang: {
    color: '#345',
    fontSize: 17,
    fontWeight: 'bold',
  },
  c_rang: {
    color: '#888',
    fontWeight: 'bold',
  },
  box_colors: {
    width: null,
    height: null,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  box_color_w: {
    width: w / 8,
    height: w / 8,
    borderWidth: 1,
    borderColor: '#aaa',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  ball: {
    width: w / 20,
    height: w / 20,
    borderRadius: 100,
    borderWidth: 0.6,
    borderColor: '#bbb',
    marginTop: 3,
  },
  txt_cl: {
    fontSize: 10,
  },
  box_note: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 15,
    marginRight: 10,
  },
  note_warr: {
    color: '#888',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 6,
    marginTop: 5,
  },
  ready: {
    flexDirection: 'row',
    marginTop: 15,
  },
  box_ready: {
    alignItems: 'flex-end',
    borderTopColor: '#bbb',
    borderTopWidth: 1,
    marginTop: 10,
  },
  note_ready: {
    marginRight: 10,
  },
  price_buy: {
    borderTopColor: '#bbb',
    borderTopWidth: 1,
    marginTop: 10,
  },
  btn_buy: {
    backgroundColor: '#0f1',
  },
  shops: {
    flexDirection: 'row',
    borderTopColor: '#bbb',
    borderTopWidth: 1,
    marginTop: 10,
  },
});

export default React.memo(Warranty);
