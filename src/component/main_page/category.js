import React from 'react';
import {ScrollView, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {category_list} from '../../data/dataArray';
import {useNavigation} from 'react-navigation-hooks';

const Category = () => {
  const {navigate} = useNavigation();

  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      {category_list.map((item, key) => (
        <TouchableOpacity
          style={styles.touch}
          onPress={() => navigate('CategoryTab_sc', {num_tab: key})}>
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
    backgroundColor: '#1AA00f',
    borderRadius: 100,
    marginLeft: 5,
    marginRight: 10,
    padding: 5,
    width: 60,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'BTitrBold',
  },
});

export default React.memo(Category);
