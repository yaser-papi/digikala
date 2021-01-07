import React from 'react';
import My_Header from '../component/header_page/header';
import Login from '../component/Login_page/login';
import My_Footer from '../component/footer/Footer';
import {Container, Content} from 'native-base';

let props = {
  head_name: 'Forget',
  head_page_name: '  ورود  ',
  head_page_icon_color: '#555',
};

const Login_sc = () => {
  return (
    <Container>
      <My_Header {...props} />
      <Content>
        <Login />
      </Content>
      <My_Footer />
    </Container>
  );
};

export default React.memo(Login_sc);
