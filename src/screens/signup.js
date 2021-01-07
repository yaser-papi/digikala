import React from 'react';
import My_Header from '../component/header_page/header';
import Signup from '../component/signup_page/login';
import My_Footer from '../component/footer/Footer';
import {Container, Content} from 'native-base';

let props = {
  head_name: 'Forget',
  head_page_name: ' ثبت نام  ',
  head_page_icon_color: '#555',
  color: '#66bb6e',
};

const SignUp = () => {
  return (
    <Container>
      <My_Header {...props} />
      <Content>
        <Signup />
      </Content>
      <My_Footer {...props} />
    </Container>
  );
};

export default React.memo(SignUp);
