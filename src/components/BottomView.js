import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {color} from '../constants/Colors';

export default function BottomView() {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>USDFx Balance</Text>

      <View>
        <Text style={styles.textStyle}>USDFx Balance</Text>
        <Text style={styles.textStyle}>USDFx Balance</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'column',
    height: 52,
    width: '100%',
    backgroundColor: color.themeColor,
    alignSelf: 'center',
    top: '55%',
  },
  textStyle: {
    fontSize: 12,
    color: color.whiteColor,
    marginHorizontal: 20,
    top: 4,
    fontWeight: '400',
  },
  circleView: {
    width: '10%',
    height: '10%',
    backgroundColor: 'black',
  },
});
