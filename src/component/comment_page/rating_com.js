import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import Stars from 'react-native-stars';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

let animate = {
  duration: 100,
  create: {type: 'linear', property: 'opacity'},
  update: {type: 'spring', springDamping: 0.8},
  delete: {type: 'linear', property: 'opacity'},
};

const Rating = () => {
  const [chang_height, set_chang_height] = useState(true);
  const [chang_btn_txt, set_chang_btn_txt] = useState('جزییات');
  const _changText = () => {
    LayoutAnimation.configureNext(animate);
    set_chang_height(!chang_height);
    chang_height ? set_chang_btn_txt('بستن') : set_chang_btn_txt('جزییات');
  };
  const Rat2 = () => {
    return (
      <View>
        <View>
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
    );
  };
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
      {chang_height ? null : Rat2()}

      <TouchableOpacity style={styles.btn} onPress={() => _changText()}>
        <Text style={styles.btn_txt}>{chang_btn_txt}</Text>
      </TouchableOpacity>
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

  btn_txt: {
    alignSelf: 'center',
    fontSize: 10,
    color: '#3498DB',
  },
});

export default React.memo(Rating);
