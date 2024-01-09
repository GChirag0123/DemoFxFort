import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {color} from '../constants/Colors';

export default function ButtonComponent({textName, onPress}) {
  return (
    <View>
      <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
        <Text>{textName}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    top: 25,
    backgroundColor: color.whiteColor,
    color: color.themeColor,
  },
});
