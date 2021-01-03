import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const Signup = () => {
  const [border_user, setBorder_user] = useState(false);
  const [border_pass, setBorder_pass] = useState(false);
  const _changBorderUser = () => {
    setBorder_user(true);
    setBorder_pass(false);
  };
  const _changBorderPass = () => {
    setBorder_pass(true);
    setBorder_user(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.box_in,
          border_user ? {borderBottomColor: '#0BA000'} : {},
        ]}
        activeOpacity={0.6}
        onPress={() => _changBorderUser()}>
        {border_user ? <Text style={styles.txt_head}>شماره موبایل</Text> : null}
        <TextInput
          placeholder="شماره موبایل"
          placeholderTextColor="#999"
          onFocus={() => _changBorderUser()}
          style={styles.txt_in}
        />
        <Icon name="email" color="#999" size={20} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.box_in,
          border_pass ? {borderBottomColor: '#0BA000'} : {},
        ]}
        activeOpacity={0.6}
        onPress={() => _changBorderPass()}>
        {border_pass ? <Text style={styles.txt_head}>کلمه عبور </Text> : null}
        <TextInput
          style={styles.txt_in}
          placeholder="شماره موبایل"
          placeholderTextColor="#999"
          // secureTextEntry={true}
          onFocus={() => _changBorderPass()}
        />
        <Icon name="lock" color="#999" size={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: w,
    height: h,
    alignItems: 'center',
    padding: 20,
  },
  box_in: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1.5,
    borderBottomColor: '#999',
  },
  txt_in: {
    width: '95%',
    textAlign: 'right',
    position: 'relative',
  },
  txt_head: {
    position: 'absolute',
    bottom: 40,
    right: 25,
    color: '#07f',
  },
});

export default React.memo(Signup);
