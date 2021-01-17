import React from 'react';
import {View, Text, TextInput} from 'react-native';

const Send_comment = () => {
  return (
    <View style={{backgroundColor: '#eee', justifyContent: 'flex-end'}}>
      <Text>نظر خود را وارد کنید</Text>
      <TextInput
        style={{
          backgroundColor: '#fff',
          width: '100%',
          height: null,
          textAlign: 'right',
          textAlignVertical: 'top',
          marginTop: 10,
        }}
        multiline={true}
        numberOfLines={5}
      />
    </View>
  );
};

export default React.memo(Send_comment);
