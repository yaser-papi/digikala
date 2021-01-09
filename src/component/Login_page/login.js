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
import {useNavigation} from 'react-navigation-hooks';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const Login = () => {
  const {navigate} = useNavigation();
  const [border_user, setBorder_user] = useState(false);
  const [border_pass, setBorder_pass] = useState(false);
  const [show_pass, setShow_pass] = useState(true);

  const _changBorderUser = () => {
    setBorder_user(true);
    setBorder_pass(false);
  };
  const _changBorderPass = () => {
    setBorder_pass(true);
    setBorder_user(false);
  };
  const _showPass = () => {
    setShow_pass(!show_pass);
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
        <TextInput
          placeholder="شماره موبایل یا ایمیل"
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
        <TextInput
          style={styles.txt_in}
          placeholder="کلمه عبور"
          placeholderTextColor="#999"
          secureTextEntry={show_pass}
          onFocus={() => _changBorderPass()}
        />
        <Icon name="lock" color="#999" size={20} />
      </TouchableOpacity>
      <View style={styles.txt_show_pass}>
        <Text>نمایش کلمه عبور</Text>
        <TouchableOpacity
          style={[
            styles.show_pass_check,
            show_pass == false ? {borderColor: '#0BA000'} : {},
          ]}
          onPress={() => _showPass()}>
          {show_pass == false ? (
            <Icon name="check" color="#0BA000" size={20} />
          ) : null}
        </TouchableOpacity>
      </View>
      <View style={styles.box_end}>
        <Text onPress={() => navigate('Forget_sc')}>
          کلمه عبور خود را فراموش کرده ام!
        </Text>
        <Text style={styles.txt_up} onPress={() => navigate('SignUp')}>
          ثبت نام در دیجی کالا
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: w,
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
  },
  txt_show_pass: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  show_pass_check: {
    width: 20,
    height: 20,
    marginLeft: 10,
    borderRadius: 2,
    borderWidth: 1,
    backgroundColor: '#ddd',
    borderColor: '#ccc',
    justifyContent: 'center',
  },
  box_end: {
    marginTop: 20,
    alignItems: 'center',
  },
  txt_up: {
    color: '#0BA000',
    marginTop: 20,
    borderBottomColor: '#0BA000',
    borderBottomWidth: 0.8,
  },
});

export default React.memo(Login);
