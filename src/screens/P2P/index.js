import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import InfoView from '../../components/InfoView';
import {color} from '../../constants/Colors';

export default function P2P() {
  return (
    <SafeAreaView>
      <Header logo />

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={[styles.viewStyle]}>
          <Text style={styles.textStyle}>P2P Trade</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.viewStyle, {backgroundColor: color.greyColor}]}>
          <Text style={styles.textStyle}>Expense</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
  viewStyle: {
    flexDirection: 'row',
    height: 50,
    width: '50%',
    backgroundColor: color.themeColor,
    justifyContent: 'center',
    marginHorizontal: 3,
    alignItems: 'center',
    top: '10%',
  },
  textStyle: {
    fontSize: 13,
    color: color.whiteColor,
    left: 5,
  },
});
