import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';
import Stars from 'react-native-stars';

const w = Dimensions.get('window').width;

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
let animate = {
  duration: 200,
  create: {type: 'linear', property: 'opacity'},
  update: {type: 'spring', springDamping: 0.8},
  delete: {type: 'linear', property: 'opacity'},
};

const People_comment = () => {
  const [chang_height, set_chang_height] = useState(true);
  const [chang_btn_txt, set_chang_btn_txt] = useState('ادامه مطلب');
  const _changText = () => {
    LayoutAnimation.configureNext(animate);
    set_chang_height(!chang_height);
    chang_height ? set_chang_btn_txt('بستن') : set_chang_btn_txt('ادامه مطلب');
  };
  const Rat2 = () => {
    return (
      <View>
        <View style={styles.s1}>
          <Stars
            half={true}
            default={2.5}
            spacing={4}
            starSize={20}
            count={5}
            fullStar={require('../../assets/images/rectangle.png')}
            emptyStar={require('../../assets/images/rectangle half.png')}
            halfStar={require('../../assets/images/rectangle.png')}
          />
        </View>
      </View>
    );
  };
  return (
    <View>
      <View style={styles.comments_view}>
        <View style={styles.comment_btn}>
          <View style={[styles.like, {paddingHorizontal: 8}]}>
            <Text style={{color: '#666', fontSize: 12, marginRight: 5}}>1</Text>
            <Icon name="dislike" size={22} color="#666" />
          </View>
          <View style={styles.like}>
            <Text style={{color: '#666', fontSize: 12, marginRight: 5}}>
              10
            </Text>
            <Icon name="like" size={22} color="#666" />
          </View>
        </View>
        <View>
          <Text style={{color: '#444', fontSize: 14}}>محمد امین کاظمی</Text>
          <Text style={{color: '#888', fontSize: 8}}>8 آذر 98</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          alignItems: 'center',
          padding: 10,
          borderRadius: 3,
          elevation: 6,
        }}>
        <View style={styles.comm_bid}>
          <Text style={{fontSize: 10, color: '#00691c'}}>
            خرید این محصول را پیشنهاد می کنم
          </Text>
        </View>
        <Text style={{fontSize: 10, paddingVertical: 10}}>
          با توجه به اینکه تو پیشنهاد ویژه خریدم راضی ام صدای خوبی داره خوش فرمه
          به گوشی هم راحت وصل میشه
        </Text>
        <View
          style={[
            chang_height ? {height: 10} : {height: 50},
            {justifyContent: 'space-between'},
          ]}>
          {chang_height ? null : Rat2()}
          <TouchableOpacity
            style={{}}
            onPress={() => {
              _changText();
            }}>
            <Text style={{fontSize: 8, textAlign: 'center'}}>
              {chang_btn_txt}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  comments_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#ccc',
  },
  comment_btn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  like: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    alignItems: 'center',
    borderWidth: 0.8,
    borderColor: '#666',
    borderRadius: 5,
    marginLeft: 3,
  },
  comm_bid: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 2,
    borderColor: '#1ced54',
    borderRadius: 5,
    backgroundColor: '#7ce698',
  },
});

export default React.memo(People_comment);
