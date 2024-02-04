import React from 'react';
import { SafeAreaView, Text, TextInput, View } from 'react-native';
import styles from './Header.style';


const Header = ({ title, counter }) => {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>{title}</Text>
            <Text style={styles.counter}>{counter}</Text>
        </SafeAreaView>
    )
}

export default Header;