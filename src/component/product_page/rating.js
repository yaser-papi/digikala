import React, {useEffect, useState, useRef} from 'react';
import {View, Text, StyleSheet, AppState} from 'react-native';
import Stars from 'react-native-stars';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

const Rating = () => {
  const [chang, setchang] = useState('gps off');
  const call = () => {
    RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
      interval: 10000,
      fastInterval: 5000,
    })
      .then((data) => {
        // The user has accepted to enable the location services
        // data can be :
        //  - "already-enabled" if the location services has been already enabled
        //  - "enabled" if user has clicked on OK button in the popup
        // console.log(data);

        if ((data === 'enabled') | (data === 'already-enabled')) {
          setchang('gps on');
        }
      })
      .catch((err) => {
        setchang('chera no');
        // The user has not accepted to enable the location services or something went wrong during the process
        // "err" : { "code" : "ERR00|ERR01|ERR02|ERR03", "message" : "message"}
        // codes :
        //  - ERR00 : The user has clicked on Cancel button in the popup
        //  - ERR01 : If the Settings change are unavailable
        //  - ERR02 : If the popup has failed to open
        //  - ERR03 : Internal error
      });
  };
  useEffect(() => {
    AppState.addEventListener('change', _handleAppStateChange);
    call();
    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = (nextAppState) => {
    switch (nextAppState) {
      case 'active':
        console.log('active');
        call();
        break;
      case 'background':
        console.log('background');
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.contaner}>
      <View style={styles.rat}>
        <View>
          <Stars
            half={true}
            default={2.5}
            // update={(val) => {this.setState({stars: val});}}
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
            // update={(val) => {this.setState({stars: val});}}
            spacing={4}
            starSize={20}
            count={5}
            fullStar={require('../../assets/images/rectangle.png')}
            emptyStar={require('../../assets/images/rectangle half.png')}
            halfStar={require('../../assets/images/rectangle.png')}
          />
          <Text>{chang}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contaner: {
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
