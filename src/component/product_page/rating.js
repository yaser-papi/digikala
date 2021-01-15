import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Stars from 'react-native-stars';

const Rating = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rat}>
        <View>
          <Stars
            half={true}
            default={2.5}
            spacing={4}
            starSize={20}
            count={5}
            fullStar={require('../../assets/images/star-filled.png')}
            emptyStar={require('../../assets/images/star.png')}
            halfStar={require('../../assets/images/star-half.png')}
          />
        </View>
        <Text style={{color: '#777'}}>
          از مجموع 1492 رای ثبت شده
          <Text style={{color: '#000'}}> 4.3 از 5</Text>
        </Text>
      </View>
      <View style={styles.rat2}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: null,
    height: null,
    backgroundColor: '#fff',
    marginTop: 10,
    elevation: 6,
  },
  rat: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
});

export default React.memo(Rating);
