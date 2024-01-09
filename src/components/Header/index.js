import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Header({logo}) {
  return (
    <View style={styles.Container}>
      <View
        style={{
          flexDirection: 'row',
          width: 150,
          height: 40,
          alignItems: 'center',
        }}>
        <Image
          style={styles.imageStyle}
          source={require('../../assets/MenuIcon.png')}
          resizeMode="contain"
        />
        <Image
          style={[styles.imageStyle, {width: 40, height: 40, left: 15}]}
          source={
            logo
              ? require('../../assets/Logo.png')
              : require('../../assets/LogoV3.png')
          }
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: 180,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Image
            style={[styles.imageStyle, {width: 20, height: 20}]}
            source={require('../../assets/CopyIcon.png')}
            resizeMode="contain"
          />
          <Text>reactnative</Text>
        </TouchableOpacity>

        <Image
          style={[styles.imageStyle, {width: 40, height: 40}]}
          source={require('../../assets/Ellipse.png')}
          resizeMode="contain"
        />
        <Image
          style={[styles.imageStyle, {width: 20, height: 20}]}
          source={require('../../assets/Notification.png')}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  imageStyle: {
    width: 50,
    height: 25,
  },
});
