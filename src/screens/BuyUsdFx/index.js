import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {color} from '../../constants/Colors';
import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';

export default function BuyUsdFx() {
  return (
    <SafeAreaView>
      <Header logo />

      <View style={styles.viewStyle}>
        <Text
          style={[
            styles.textStyle,
            {
              fontSize: 18,
              fontWeight: '700',
            },
          ]}>
          Buy USDFx
        </Text>

        <Text style={styles.textStyle}>I want to pay</Text>
        <InputComponent />

        <Text style={styles.textStyle}>I will Receive</Text>
        <InputComponent />

        <Text style={styles.textStyle}>Order Valid Till</Text>
        <InputComponent />

        <ButtonComponent textName={'Create Order'} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    height: '100%',
  },
  viewStyle: {
    height: '100%',
    width: '100%',
    backgroundColor: color.themeColor,
    alignSelf: 'center',
    top: 10,
  },
  textStyle: {
    fontSize: 12,
    color: color.whiteColor,
    marginHorizontal: 20,
    marginVertical: 8,
    fontWeight: '400',
  },
});
