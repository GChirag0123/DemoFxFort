import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {color} from '../constants/Colors';

export default function InfoView({
  customStyle,
  customViewStyle,
  textName,
  onPress,
  icon,
}) {
  return (
    <TouchableOpacity
      style={[styles.viewStyle, customViewStyle]}
      onPress={onPress}>
      {!icon ? (
        <Image
          style={[styles.imageStyle, {customStyle}]}
          source={require('../assets/InfoIcon.png')}
          resizeMode="contain"
        />
      ) : (
        ''
      )}

      <Text style={styles.textStyle}>{textName}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    height: 50,
    width: '40%',
    backgroundColor: color.greyColor,
    justifyContent: 'center',
    marginHorizontal: 3,
    alignItems: 'center',
    top: '10%',
  },
  textStyle: {
    fontSize: 13,
    color: color.themeColor,
    left: 5,
  },
  imageStyle: {
    width: 20,
    height: 20,
  },
});
