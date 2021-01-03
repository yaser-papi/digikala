import React, {useState} from 'react';
import {View, Text, Dimensions, StyleSheet, Share} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {name_product} from '../../data/dataArray';
import Ripple from 'react-native-material-ripple';

const w = Dimensions.get('window').width;

const Name = () => {
  const [shareValue, setShareValue] = useState('');
  const ShareKala = () => {
    Share.share({message: shareValue.toString()});
  };

  return (
    <View style={styles.container}>
      <View style={styles.box_icon}>
        <Ripple style={styles.btn_icon} onPress={() => ShareKala()}>
          <Icon name="share" size={22} color="#999" />
        </Ripple>
        <Ripple style={styles.btn_icon}>
          <Icons name="bell" size={22} color="#999" />
        </Ripple>
        <Ripple style={styles.btn_icon}>
          <Icon name="heart" size={22} color="#999" />
        </Ripple>
      </View>

      {name_product.map((item, index) => (
        <View style={styles.box_name}>
          <Text style={styles.p_name}>{item.p_name}</Text>
          <Text style={styles.e_name}>{item.e_name}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: w,
    height: w / 4,
    backgroundColor: '#fafafa',
    borderTopWidth: 0.6,
    borderTopColor: '#eee',
    borderBottomWidth: 1.2,
    borderBottomColor: '#999',
  },
  box_icon: {
    flexDirection: 'row',
  },
  btn_icon: {
    paddingHorizontal: 15,
    padding: 5,
    borderRadius: 10,
  },
  box_name: {
    flex: 1,
    justifyContent: 'space-around',
  },
  p_name: {
    color: '#111',
    fontSize: 16,
    fontWeight: 'bold',
    paddingRight: 15,
  },
  e_name: {
    color: '#999',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
    paddingRight: 15,
  },
});

export default React.memo(Name);
