import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {useNavigation} from 'react-navigation-hooks';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const CELL_COUNT = 5;

const Forget = () => {
  const {navigate} = useNavigation();
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const [codecheck, setCodecheck] = useState(false);
  const codeCheck = () => {
    if (value == '11111') {
      alert('کد صحیح است');
      setCodecheck(false);
    } else {
      setCodecheck(true);
    }
  };
  return (
    <View style={StyleSheet.container}>
      <View style={styles.parent}>
        <Text>کد به شماره 09123456789 ارسال می شود آن را وارد کنید</Text>
        <Text
          style={{color: 'green', marginTop: 40}}
          onPress={() => navigate('Login_sc')}>
          {' '}
          ویرایش شماره تماس
        </Text>
      </View>

      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        selectionColor="red"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
        onBlur={codeCheck}
        onFocus={() => {
          setCodecheck(false);
        }}
      />
      {codecheck ? (
        <Text style={styles.codeErr}>کد وارد شده صحیح نیست</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: w,
    height: h,
    backgroundColor: '#ddd',
  },
  parent: {
    width: w / 1.4,
    height: h / 5,
    backgroundColor: '#fff',
    borderColor: 'green',
    borderWidth: 2,
    alignSelf: 'center',
    marginTop: 30,
    padding: 10,
  },
  codeFieldRoot: {marginTop: 30, alignSelf: 'center'},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
    borderRadius: 10,
    marginRight: 5,
    color: 'green',
  },
  focusCell: {
    borderColor: 'green',
  },
  codeErr: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default React.memo(Forget);
