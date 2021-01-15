import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import My_Header from '../component/header_page/header';
import Rating from '../component/comment_page/rating_com';

let props = {
  head_name: 'Forget',
  head_page_name: 'نظرات کاربران',
};

const Comment = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: '#ddd',
      }}>
      <My_Header {...props} />
      <View style={{paddingHorizontal: 5, paddingVertical: 15}}>
        <View style={styles.name_view}>
          <Text style={styles.name_text}>هدفون بیسیم هایلو</Text>
        </View>
        <Rating />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  name_view: {
    width: '100%',
    height: null,
  },
  name_text: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: '2 Elham',
    color: '#666',
  },
});

export default React.memo(Comment);
