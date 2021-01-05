import React from 'react';
import {Text} from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  View,
} from 'native-base';
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/MaterialIcons';

const My_Header = (props) => {
  const main_header = () => {
    return (
      <Header style={{backgroundColor: '#ef394e'}}>
        <Left>
          <View style={{flexDirection: 'row'}}>
            <Ripple>
              <Icon name="shopping-cart" size={22} color="#fff" />
            </Ripple>
            <Ripple>
              <Icon name="search" size={22} color="#fff" />
            </Ripple>
          </View>
        </Left>
        <Right>
          <Text style={{color: '#fff', fontSize: 22, fontWeight: 'bold'}}>
            {props.head_page_name ? props.head_page_name : 'digikala'}
          </Text>

          <Ripple>
            <Icon
              name={props.head_page_icon ? props.head_page_icon : 'menu'}
              size={22}
              color="#fff"
            />
          </Ripple>
        </Right>
      </Header>
    );
  };

  switch (props.head_name) {
    case 'Main':
      return main_header();
  }
};

export default React.memo(My_Header);
