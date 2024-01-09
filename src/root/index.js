import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../screens/Dashboard';
import BuyUsdFx from '../screens/BuyUsdFx';
import P2P from '../screens/P2P';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="BuyUsdFx"
          component={BuyUsdFx}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="P2P"
          component={P2P}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
