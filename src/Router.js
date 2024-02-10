import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Products from './Store/pages/Products/Products';
import Detail from './Store/pages/Detail/Detail';

const Stack = createNativeStackNavigator();



function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }
      }>
        <Stack.Screen name="ProductPage" component={Products} />
        <Stack.Screen name='DetailPage' component={Detail} />

      </Stack.Navigator>
    </NavigationContainer >
  );
}



export default App;
