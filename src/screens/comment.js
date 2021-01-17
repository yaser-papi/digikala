import React, {useState} from 'react';
import {ScrollView, View, Text, StyleSheet, Dimensions} from 'react-native';
import My_Header from '../component/header_page/header';
import Rating from '../component/comment_page/rating_com';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ripple from 'react-native-material-ripple';
import People_comment from '../component/comment_page/people_comment';
import {useNavigation} from 'react-navigation-hooks';

const w = Dimensions.get('window').width;

let props = {
  head_name: 'Forget',
  head_page_name: 'نظرات کاربران',
};

const Comment = () => {
  const {navigate} = useNavigation();
  const [filter, setFilter] = useState('جدیدترین نظرات');
  const Comments_btn = () => {
    if (filter === 'جدیدترین نظرات') {
      setFilter('      همه نظرات');
    } else {
      setFilter('جدیدترین نظرات');
    }
  };
  return (
    <View style={{flex: 1}}>
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
          <View style={styles.comments_view}>
            <Ripple
              style={styles.comment_btn}
              onPress={() => {
                Comments_btn();
              }}>
              <Text style={{color: '#666', fontSize: 12, marginRight: 5}}>
                {filter}
              </Text>
              <Icon name="sort" size={16} />
            </Ripple>
            <Text style={{color: '#666', fontSize: 12}}>
              نظرات کاربران - 115 نظر
            </Text>
          </View>
          <People_comment />
        </View>
      </ScrollView>
      <Ripple
        style={styles.pen}
        rippleContainerBorderRadius={30}
        onPress={() => navigate('Add_comment')}>
        <Icon name="pencil" color="#fff" size={22} />
      </Ripple>
    </View>
  );
};

const styles = StyleSheet.create({
  name_view: {
    width: '100%',
  },
  name_text: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: '2 Elham',
    color: '#666',
  },
  comments_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  comment_btn: {
    width: w / 4,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 5,
    padding: 3,

    alignItems: 'center',
    backgroundColor: '#fff',
  },
  pen: {
    position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: '#ef394e',
    borderRadius: 50,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
  },
});

export default React.memo(Comment);
