import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ficon from 'react-native-vector-icons/Fontisto';
import Ripple from 'react-native-material-ripple';

const sideMenu = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.head}>
        <Text style={styles.head_txt}>ورود و ثبت نام</Text>
        <Icon name="user-alt" style={styles.icon} />
      </View>
      <View style={styles.list}>
        <Ripple style={styles.btn}>
          <Text style={styles.title}>خانه</Text>
          <Icon name="home" style={styles.icons} />
        </Ripple>
        <Ripple style={styles.btn}>
          <Text style={styles.title}>لیست دسته بندی محصولات</Text>
          <Icon name="list" style={styles.icons} />
        </Ripple>
        <Ripple style={styles.btn}>
          <Text style={styles.title}>سبد خرید</Text>
          <Icon name="shopping-cart" style={styles.icons} />
        </Ripple>
        <Ripple style={styles.btn}>
          <Text style={styles.title}>پر فروش ترین ها</Text>
          <Ficon name="star" style={styles.icons} />
        </Ripple>
        <Ripple style={styles.btn}>
          <Text style={styles.title}>پیشنها دویژه دیجی کالا</Text>
          <Ficon name="star" style={styles.icons} />
        </Ripple>
        <Ripple style={styles.btn}>
          <Text style={styles.title}>پر بازدیدترین ها</Text>
          <Ficon name="star" style={styles.icons} />
        </Ripple>
        <Ripple style={styles.btn}>
          <Text style={styles.title}>جدید ترین ها</Text>
          <Ficon name="star" style={styles.icons} />
        </Ripple>
        <Ripple style={styles.btn}>
          <Text style={styles.title}>تنظیمات</Text>
          <Ficon name="player-settings" style={styles.icons} />
        </Ripple>
        <Ripple style={styles.btn}>
          <Text style={styles.title}>سوالات متداول</Text>
          <Icon name="question" style={styles.icons} />
        </Ripple>
        <Ripple style={styles.btn}>
          <Text style={styles.title}>درباره ما</Text>
          <Icon name="file-medical-alt" style={styles.icons} />
        </Ripple>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    width: '100%',
    height: '10%',
    backgroundColor: '#ef394e',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 10,
  },
  head_txt: {
    color: '#fff',
    fontSize: 12,
    borderWidth: 0.8,
    borderColor: '#fff',
    borderRadius: 5,
    padding: 3,
    fontWeight: 'bold',
  },
  icon: {
    color: '#fff',
    marginBottom: 5,
    paddingLeft: 5,
  },
  list: {},
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 10,
  },
  title: {
    fontSize: 12,
    paddingRight: 15,
  },
  icons: {
    color: '#777',
  },
});

export default sideMenu;
