import React from 'react';
import {Text, StatusBar} from 'react-native';
import {Header, Left, Right, View} from 'native-base';
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextInput} from 'react-native-gesture-handler';
import {useNavigation} from 'react-navigation-hooks';

const My_Header = (props) => {
  const {navigate, goBack, toggleDrawer} = useNavigation();

  const main_header = () => {
    return (
      <>
        <Header
          style={{backgroundColor: '#ef394e'}}
          androidStatusBarColor={'#ef394e'}>
          <Left>
            <View style={{flexDirection: 'row'}}>
              <Ripple onPress={() => navigate('Shop_cart')}>
                <Icon name="shopping-cart" size={22} color="#fff" />
              </Ripple>
              <Ripple onPress={() => navigate('Search_sc')}>
                <Icon name="search" size={22} color="#fff" />
              </Ripple>
            </View>
          </Left>
          <Right>
            <Text style={{color: '#fff', fontSize: 22, fontWeight: 'bold'}}>
              {props.head_page_name ? props.head_page_name : 'digikala'}
            </Text>

            <Ripple
              onPress={() => {
                props.head_page_icon ? goBack(null) : toggleDrawer();
              }}>
              <Icon
                name={props.head_page_icon ? props.head_page_icon : 'menu'}
                size={22}
                color={
                  props.head_page_icon_color
                    ? props.head_page_icon_color
                    : '#fff'
                }
              />
            </Ripple>
          </Right>
        </Header>
      </>
    );
  };
  const Shop_cart_header = () => {
    return (
      <Header
        style={{backgroundColor: '#ef394e'}}
        androidStatusBarColor={'#ef394e'}>
        <Left>
          <View style={{flexDirection: 'row'}}>
            <Ripple>
              <Icon name="shopping-cart" size={22} color="#fff" />
            </Ripple>
          </View>
        </Left>
        <Right>
          <Text style={{color: '#ddd', fontSize: 20}}> سبد خرید شما </Text>

          <Ripple onPress={() => goBack(null)}>
            <Icon name="close" size={20} color="#555" />
          </Ripple>
        </Right>
      </Header>
    );
  };
  const Forget_header = () => {
    return (
      <Header
        hasTabs
        style={{backgroundColor: '#ef394e'}}
        androidStatusBarColor={'#ef394e'}>
        <Right>
          <Text style={{color: '#ddd', fontSize: 20}}>
            {props.head_page_name ? props.head_page_name : 'ورود'}
          </Text>

          <Ripple onPress={() => goBack(null)}>
            <Icon
              name={props.head_page_icon ? props.head_page_icon : 'close'}
              size={20}
              color={
                props.head_page_icon_color ? props.head_page_icon_color : '#fff'
              }
            />
          </Ripple>
        </Right>
      </Header>
    );
  };
  const Search_header = () => {
    return (
      <Header
        style={{backgroundColor: '#fff'}}
        androidStatusBarColor={'#ef394e'}>
        <Left>
          <View style={{flexDirection: 'row'}}>
            <Ripple>
              <Icon name="qr-code" size={22} color="#555" />
            </Ripple>
            <Ripple>
              <Icon name="mic" size={22} color="#555" />
            </Ripple>
          </View>
        </Left>
        <Right>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TextInput placeholder="جستجو در دیجی کالا..." />
            <Ripple onPress={() => goBack(null)}>
              <Icon name="arrow-forward" size={22} color="#555" />
            </Ripple>
          </View>
        </Right>
      </Header>
    );
  };

  switch (props.head_name) {
    case 'Main':
      return main_header();
    case 'Shop':
      return Shop_cart_header();
    case 'Forget':
      return Forget_header();
    case 'Search':
      return Search_header();
  }
};

export default React.memo(My_Header);
