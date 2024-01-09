import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {color} from '../../constants/Colors';
import InfoView from '../../components/InfoView';
import BottomView from '../../components/BottomView';

export default function Dashboard({navigation}) {
  return (
    <SafeAreaView style={styles.Container}>
      <Header />
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>USDFx Balance</Text>
        <Text style={styles.textStyle}>0.00</Text>
      </View>
      <Text
        style={{
          top: '5%',
          fontSize: 15,
          fontWeight: '800',
          color: color.themeColor,
          left: 12,
        }}>
        Trade at your fingertips
      </Text>

      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          top: '10%',
        }}>
        <InfoView
          textName={'Buy USDFx'}
          onPress={() => {
            navigation.navigate('BuyUsdFx');
          }}
        />
        <InfoView
          textName={'P2P Trade'}
          onPress={() => {
            navigation.navigate('P2P');
          }}
        />
      </View>

      <Text
        style={{
          top: '10%',
          fontSize: 15,
          fontWeight: '800',
          color: color.themeColor,
          left: 12,
        }}>
        Know USDFx Ecosystem
      </Text>

      <View
        style={[
          styles.viewStyle,
          {
            width: '85%',
            top: '20%',
            height: 40,
            alignSelf: 'center',
            alignItems: 'center',
          },
        ]}>
        <Text
          style={[
            styles.textStyle,
            {fontSize: 12, fontWeight: '400', alignItems: 'center', top: 0},
          ]}>
          Learn about the partner program
        </Text>
      </View>

      <View
        style={[
          styles.viewStyle,
          {
            width: '85%',
            top: '22%',
            height: 40,
            alignSelf: 'center',
            alignItems: 'center',
          },
        ]}>
        <Text
          style={[
            styles.textStyle,
            {fontSize: 12, fontWeight: '400', alignItems: 'center', top: 0},
          ]}>
          Learn about USDFx
        </Text>
      </View>

      <View
        style={[
          styles.viewStyle,
          {
            width: '85%',
            top: '24%',
            height: 40,
            alignSelf: 'center',
            alignItems: 'center',
          },
        ]}>
        <Text
          style={[
            styles.textStyle,
            {fontSize: 12, fontWeight: '400', alignItems: 'center', top: 0},
          ]}>
          Learn about USDFx integration with Business
        </Text>
      </View>

      <Text
        style={{
          top: '18%',
          fontSize: 15,
          fontWeight: '800',
          color: color.themeColor,
          left: 12,
        }}>
        Important Links
      </Text>

      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          top: '30%',
        }}>
        <InfoView textName={'Partner App '} />
        <InfoView textName={'Contact us'} />
      </View>

      <BottomView />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    height: '100%',
  },
  viewStyle: {
    flexDirection: 'row',
    height: 50,
    width: '95%',
    backgroundColor: color.themeColor,
    justifyContent: 'space-between',
    alignSelf: 'center',
    top: '3%',
  },
  textStyle: {
    fontSize: 18,
    color: color.whiteColor,
    marginHorizontal: 20,
    top: 4,
    fontWeight: '700',
  },
});
