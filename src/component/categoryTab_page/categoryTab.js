import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {cat_kala1} from '../../data/dataArray';
import {useNavigation} from 'react-navigation-hooks';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const CategoryTab = () => {
  const {navigate} = useNavigation();
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={cat_kala1}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.container}
            onPress={() => navigate('Category', {header_name: item.name})}>
            <Image
              style={styles.img}
              source={{uri: item.image}}
              resizeMode="contain"
            />
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: w,
    height: h / 11,
    borderBottomWidth: 0.8,
    borderBottomColor: '#bbb',
    padding: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  img: {width: w / 6, height: '100%'},
});

export default React.memo(CategoryTab);
