import React from 'react';
import {ScrollView, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {category_list} from '../../data/dataArray';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Category = () => {
  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      {category_list.map((item, key) => (
        <TouchableOpacity style={styles.touch} key={key}>
          <Icon name="arrow-back-ios" />
          <Text style={styles.text}>{item.touch}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
  },
  touch: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 100,
    marginLeft: 5,
    marginRight: 10,
    padding: 5,
    width: 60,
  },
  text: {
    color: '#0050d1',
    textAlign: 'center',
    fontSize: 14,
  },
});

export default React.memo(Category);
