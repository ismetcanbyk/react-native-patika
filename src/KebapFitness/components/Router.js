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

import Welcome from './KebapFitness/pages/Welcome';
import MemberSign from './KebapFitness/pages/MemberSign';
import MemberResult from './KebapFitness/pages/MemberResult';

const Stack = createNativeStackNavigator();


function App() {


    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }
            }>
                <Stack.Screen name="WelcomeScreen" component={Welcome} />
                <Stack.Screen name='MemberSignScreen' component={MemberSign} />
                <Stack.Screen name='MemberResultScreen' component={MemberResult} />
            </Stack.Navigator>
        </NavigationContainer >
    );
}



export default App;
