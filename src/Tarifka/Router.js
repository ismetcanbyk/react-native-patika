import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Categories from './Tarifka/pages/Categories';
import Detail from './Tarifka/pages/Detail'
import Meals from './Tarifka/pages/Meals';

const Stack = createNativeStackNavigator();



function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="CategoriesPage" component={Categories} options={{
          title: 'Categories',
          headerStyle: {
            backgroundColor: 'White',
          },
          headerTitleStyle: {
            color: '#ffa500',
          },
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name='MealsPage' component={Meals} options={{
          title: 'Meals',
          headerStyle: {
            backgroundColor: 'White',
          },
          headerTitleStyle: {
            color: '#ffa500',
          },
          headerTintColor: '#ffa500',
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name='DetailPage' component={Detail} options={{
          title: 'Meals',
          headerStyle: {
            backgroundColor: 'White',
          },
          headerTitleStyle: {
            color: '#ffa500',
          },
          headerTintColor: '#ffa500',
          headerTitleAlign: 'center',
        }} />

      </Stack.Navigator>
    </NavigationContainer >
  );
}



export default App;
