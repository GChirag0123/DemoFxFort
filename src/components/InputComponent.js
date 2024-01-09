import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import React from 'react';
import {color} from '../constants/Colors';

export default function InputComponent({value, onChangeText}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputView}
        value={value}
        onChangeText={onChangeText}
      />
      <Image
        style={[styles.imageStyle]}
        source={require('../assets/USD.png')}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '80%',
    height: 40,
    backgroundColor: color.whiteColor,
  },
  inputView: {
    width: '80%',
    height: 40,
    backgroundColor: color.whiteColor,
  },
  imageStyle: {
    width: 50,
    height: 40,
  },
});
