import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Picon from 'react-native-vector-icons/MaterialCommunityIcons';
import {kala_list1} from '../../data/dataArray';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const Search = () => {
  const [view, setView] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [redio, setRedio] = useState(1);

  const _sortBy = () => {
    return (
      <Modal visible={showModal} transparent={true}>
        <View style={sort_pop_style.sort_pop_back}>
          <Ripple
            style={sort_pop_style.ripp}
            rippleColor="transparent"
            onPress={() => setShowModal(false)}
          />
          <View style={sort_pop_style.sort_pop}>
            <View style={sort_pop_style.sort_poprow}>
              <Text>پر بازدید ترین</Text>
              <Picon
                name={redio === 1 ? 'circle-slice-8' : 'circle-outline'}
                size={22}
                color="#00ae00"
                onPress={() => {
                  setRedio(1);
                  setShowModal(false);
                }}
              />
            </View>
            <View style={sort_pop_style.sort_poprow}>
              <Text>پر فروش ترین</Text>
              <Picon
                name={redio === 2 ? 'circle-slice-8' : 'circle-outline'}
                size={22}
                color="#00ae00"
                onPress={() => {
                  setRedio(2);
                  setShowModal(false);
                }}
              />
            </View>
            <View style={sort_pop_style.sort_poprow}>
              <Text>ارزان ترین</Text>
              <Picon
                name={redio === 3 ? 'circle-slice-8' : 'circle-outline'}
                size={22}
                color="#00ae00"
                onPress={() => {
                  setRedio(3);
                  setShowModal(false);
                }}
              />
            </View>
            <View style={sort_pop_style.sort_poprow}>
              <Text>گران ترین</Text>
              <Picon
                name={redio === 4 ? 'circle-slice-8' : 'circle-outline'}
                size={22}
                color="#00ae00"
                onPress={() => {
                  setRedio(4);
                  setShowModal(false);
                }}
              />
            </View>
            <View style={sort_pop_style.sort_poprow}>
              <Text>محبوب ترین</Text>
              <Picon
                name={redio === 5 ? 'circle-slice-8' : 'circle-outline'}
                size={22}
                color="#00ae00"
                onPress={() => {
                  setRedio(5);
                  setShowModal(false);
                }}
              />
            </View>
          </View>
          <Ripple
            style={sort_pop_style.ripp}
            rippleColor="transparent"
            onPress={() => setShowModal(false)}
          />
        </View>
      </Modal>
    );
  };

  const _header = () => {
    return (
      <View style={styles.header_container}>
        <View style={styles.header_container_left}>
          {view === 1 ? (
            <Icon name="grid-view" size={22} onPress={() => setView(2)} />
          ) : view === 2 ? (
            <Icon name="sort" size={22} onPress={() => setView(3)} />
          ) : (
            <Icon name="view-list" size={22} onPress={() => setView(1)} />
          )}
        </View>
        <View style={styles.header_container_right}>
          <Text>مرتب سازی</Text>
          <Icon
            name="sort"
            size={22}
            onPress={() => {
              setShowModal(true);
            }}
          />
        </View>
        <View style={styles.header_container_right}>
          <Text>فیلتر کردن</Text>
          <Icon name="filter-list" size={22} />
        </View>
      </View>
    );
  };
  const _full = (props) => {
    return (
      <View style={f_styles.contain}>
        <View style={f_styles.box_img}>
          <Image
            style={f_styles.img}
            source={{
              uri: props.data.image,
            }}
          />
        </View>
        <View style={{width: '100%'}}>
          <Text>{props.data.name}</Text>
          <View style={f_styles.box_name_price}>
            <View style={f_styles.box_price}>
              <Text style={f_styles.price}>340000</Text>
              <Text style={f_styles.off_price}>{props.data.price}</Text>
            </View>
            <Text style={f_styles.pish}>پیشنهاد ویژه</Text>
          </View>
        </View>
      </View>
    );
  };
  const _half = (props) => {
    return (
      <View style={[f_styles.contain, {flexDirection: 'row', height: h / 4}]}>
        <View style={{height: '30%', width: '60%'}}>
          <Text>{props.data.name}</Text>
          <View style={f_styles.box_name_price}>
            <View style={f_styles.box_price}>
              <Text style={f_styles.price}>340000</Text>
              <Text style={f_styles.off_price}>{props.data.price}</Text>
            </View>
            <Text style={[f_styles.pish, {fontSize: 10}]}>پیشنهاد ویژه</Text>
          </View>
        </View>
        <View style={[f_styles.box_img, {width: '30%'}]}>
          <Image
            style={[f_styles.img, {width: '100%'}]}
            source={{
              uri: props.data.image,
            }}
            resizeMode="contain"
          />
        </View>
      </View>
    );
  };
  const _duble = (props) => {
    return (
      <View
        style={[
          f_styles.contain,
          {width: w / 2.2, height: h / 3.2, alignSelf: 'flex-start'},
        ]}>
        <View style={f_styles.box_img}>
          <Image
            style={f_styles.img}
            source={{
              uri: props.data.image,
            }}
            resizeMode="contain"
          />
        </View>
        <View style={{width: '100%'}}>
          <Text>{props.data.name}</Text>
          <View style={f_styles.box_name_price}>
            <View style={f_styles.box_price}>
              <Text style={f_styles.price}>340000</Text>
              <Text style={f_styles.off_price}>{props.data.price}</Text>
            </View>
            <Text style={f_styles.pish}>پیشنهاد ویژه</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <_sortBy />
      <_header />
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {kala_list1.map((item, key) =>
          view === 1 ? (
            <_full data={item} />
          ) : view === 2 ? (
            <_duble data={item} />
          ) : (
            <_half data={item} />
          ),
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: w,
    height: h,
    backgroundColor: '#ddd',
  },
  header_container: {
    width: w,
    height: h / 15,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  header_container_left: {
    width: h / 15,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header_container_right: {
    width: '45%',
    height: '100%',
    flexDirection: 'row',
    borderLeftWidth: 1,
    borderLeftColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const f_styles = StyleSheet.create({
  contain: {
    width: w / 1.05,
    height: h / 2.5,
    margin: 9,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 3,
    elevation: 3,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box_img: {
    width: '100%',
    height: '70%',
  },
  img: {
    width: '50%',
    height: '100%',
    alignSelf: 'center',
  },
  box_name_price: {
    flexDirection: 'row',
    width: '100%',
    paddingTop: 10,
    justifyContent: 'space-between',
    borderTopWidth: 2,
    borderTopColor: '#ddd',
  },

  off_price: {
    color: '#0f0',
  },
  pish: {
    height: 30,
    backgroundColor: '#f02',
    padding: 5,
    borderRadius: 4,
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
  price: {
    color: '#f00',
    textDecorationLine: 'line-through',
  },
});
const sort_pop_style = StyleSheet.create({
  sort_pop_back: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sort_pop: {
    width: w / 1.5,
    height: h / 3,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  sort_poprow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
  },
  ripp: {
    width: w,
    height: h / 3,
  },
});

export default React.memo(Search);
