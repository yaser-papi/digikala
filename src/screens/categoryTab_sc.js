import React from 'react';
import My_Header from '../component/header_page/header';
import {Container, Header, Tab, Tabs, ScrollableTab} from 'native-base';
import CategoryTab from '../component/categoryTab_page/categoryTab';
import {category_list} from '../data/dataArray';

let props = {
  head_name: 'Forget',
  head_page_name: 'دسته بندی محصولات  ',
  head_page_icon: 'arrow-forward',
};

const CategoryTab_sc = () => {
  return (
    <>
      <My_Header {...props} />
      <Container>
        <Tabs renderTabBar={() => <ScrollableTab />}>
          {category_list.map((item, key) => (
            <Tab
              heading={item.touch}
              tabStyle={{backgroundColor: '#ef394e'}}
              activeTabStyle={{backgroundColor: '#ef394e'}}>
              <CategoryTab />
            </Tab>
          ))}
        </Tabs>
      </Container>
    </>
  );
};

export default React.memo(CategoryTab_sc);
