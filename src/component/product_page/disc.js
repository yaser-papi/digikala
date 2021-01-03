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

const Disc = () => {
  const [chang_height, set_chang_height] = useState(false);
  const [chang_btn_txt, set_chang_btn_txt] = useState('ادامه مطلب');
  const _changText = () => {
    LayoutAnimation.configureNext(animate);
    set_chang_height(!chang_height);
    chang_height ? set_chang_btn_txt('ادامه مطلب') : set_chang_btn_txt('بستن');
  };

  return (
    <View style={styles.contaner}>
      <Text style={[styles.txt, chang_height ? {height: null} : {height: 100}]}>
        duration in milliseconds create, optional config for animating in new
        views update, optional config for animating views that have been updated
        delete, optional config for animating views as they are removed The
        config that's passed to create, update, or delete has the following
        keys: type, the animation type to use property, the layout property to
        animate (optional, but recommended for create and delete) springDamping
        (number, optional and only for use with type: Type.spring)
        initialVelocity (number, optional) delay (number, optional) duration
        (number, optional) duration in milliseconds create, optional config for
        animating in new views update, optional config for animating views that
        have been updated delete, optional config for animating views as they
        are removed The config that's passed to create, update, or delete has
        the following keys: type, the animation type to use property, the layout
        property to animate (optional, but recommended for create and delete)
        springDamping (number, optional and only for use with type: Type.spring)
        initialVelocity (number, optional) delay (number, optional) duration
        (number, optional)
      </Text>
      <TouchableOpacity style={styles.btn} onPress={() => _changText()}>
        <Text style={styles.btn_txt}>{chang_btn_txt}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contaner: {
    width: null,
    height: null,
    backgroundColor: '#fff',
    padding: 10,
  },
  btn: {
    borderTopWidth: 0.6,
  },
  btn_txt: {
    alignSelf: 'center',
  },
  txt: {
    lineHeight: 20,
  },
});

export default React.memo(Disc);
