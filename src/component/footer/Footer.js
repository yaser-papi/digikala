import React from 'react';
import {Footer, FooterTab, Button, Text} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

const My_Footer = (props) => {
  return (
    <Footer>
      <FooterTab>
        <Button
          full
          style={{
            flexDirection: 'row',
            backgroundColor: props.color ? props.color : '#1e88e5',
          }}>
          <Icon name="arrow-back-ios" color="#fff" />
          <Text style={{color: '#fff'}}>ورود به دیجی کالا</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};

export default React.memo(My_Footer);
