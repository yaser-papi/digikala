import React from 'react';
import My_Header from '../component/header_page/header';
import {Container, Content} from 'native-base';
import My_Footer from '../component/footer/Footer';
import Send_comment from '../component/add_comment/send_comment';

let props = {
  head_name: 'Forget',
  head_page_name: '  ثبت نقد و بررسی    ',
  head_page_icon: 'arrow-forward',
  foot_name: 'ثبت نقد و بررسی',
};

const Add_comment = () => {
  return (
    <>
      <Container>
        <My_Header {...props} />
        <Content style={{backgroundColor: '#eee', padding: 15}}>
          <Send_comment />
        </Content>
        <My_Footer {...props} />
      </Container>
    </>
  );
};

export default React.memo(Add_comment);
