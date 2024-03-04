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
import Login from './Store/pages/Login';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();



function App() {

  const userSession = useSelector(state => state.user);
  const isLoading = useSelector(state => state.isAuthLoading);

  return (
    <NavigationContainer>
      <Stack.Navigator >
        {!userSession ? (
          <Stack.Screen name="LoginPage" component={Login} options={{
            title: 'Login',
            headerStyle: {
              backgroundColor: '#64b5f6',
            },
            headerTitleStyle: {
              color: 'white',
            }
          }} />
        ) : (
          <>

            <Stack.Screen name="ProductPage" component={Products} options={{
              title: 'Dükkan',
              headerStyle: {
                backgroundColor: '#64b5f6',
              },
              headerTitleStyle: {
                color: 'white',
              }
            }} />
            <Stack.Screen name='DetailPage' component={Detail} options={{
              title: 'Detay',
              headerStyle: {
                backgroundColor: '#64b5f6',
              },
              headerTitleStyle: {
                color: 'white',
              },
              headerTintColor: 'white',
            }} />
          </>
        )}



      </Stack.Navigator>
    </NavigationContainer >
  );
}



export default App;
