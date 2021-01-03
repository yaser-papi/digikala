import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import Riplle from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/MaterialIcons';

const w = Dimensions.get('window').width;

const Buttons = () => {
  return (
    <View style={styles.container}>
      <Riplle style={styles.btn}>
        <Text style={styles.txt}>نظرات کاربران</Text>
        <Icon name="forum" size={16} color="#999"></Icon>
      </Riplle>
      <Riplle style={styles.btn}>
        <Text style={styles.txt}>مشخصات</Text>
        <Icon name="content-paste" size={16} color="#999"></Icon>
      </Riplle>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: null,
    height: w / 12,
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  btn: {
    flexDirection: 'row',
    width: w / 2.19,
    height: w / 12,
    backgroundColor: '#fff',
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    color: '#666',
    fontSize: 12,
    marginRight: 7,
    fontWeight: 'bold',
  },
});

export default React.memo(Buttons);
