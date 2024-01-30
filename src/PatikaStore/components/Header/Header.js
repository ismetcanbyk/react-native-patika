import React from 'react';
import { SafeAreaView, Text, TextInput, View } from 'react-native';
import styles from './Header.style';


const Header = () => {

    return (
        <SafeAreaView >
            <Text style={styles.header}>PATIKASTORE</Text>
        </SafeAreaView>
    )
}

export default Header;