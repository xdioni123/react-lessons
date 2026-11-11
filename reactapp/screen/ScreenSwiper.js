import React from "react";
import { View, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import Icons from "../components/Icons";

const Home = () => {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.sliderContainer}>
        <Swiper autoplay activeDotColor='purple' autoplayTimeout={5}>
          <View style={styles.item}>
            <Image
              source={require('../assets/swiper1.png')}
              style={styles.ImageItem}
              resizeMode='cover'
            />
          </View>
          <View style={styles.item}>
            <Image
              source={require('../assets/swiper2.png')}
              style={styles.ImageItem}
              resizeMode='cover'
            />
          </View>
          <View style={styles.item}>
            <Image
              source={require('../assets/swiper3.png')}
              style={styles.ImageItem}
              resizeMode='cover'
            />
          </View>
        </Swiper>
      </View>

      <View style={styles.iconContainer}>
        <Icons name="cellphone-iphone" iconsText="Iphone" />
        <Icons name="android" iconsText="Android" />
        <Icons name="laptop" iconsText="Laptop" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  sliderContainer: {
    width: '90%',
    height: 200,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 8,
  },
  ImageItem: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
  },
  iconContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Home;
