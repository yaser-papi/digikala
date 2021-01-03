import React from 'react';
import {Container, Header, Tab, Tabs, ScrollableTab} from 'native-base';
import CategoryTab from '../component/categoryTab_page/categoryTab';
import {category_list} from '../data/dataArray';

const CategoryTab_sc = () => {
  return (
    <Container>
      <Tabs renderTabBar={() => <ScrollableTab />}>
        {category_list.map((item, key) => (
          <Tab
            heading={item.touch}
            tabStyle={{backgroundColor: '#ff3333'}}
            activeTabStyle={{backgroundColor: '#ff3333'}}>
            <CategoryTab />
          </Tab>
        ))}
      </Tabs>
    </Container>
  );
};

export default React.memo(CategoryTab_sc);
