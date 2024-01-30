import React from 'react';
import { SafeAreaView, Text, TextInput, View } from 'react-native';
import styles from './SearchBar.style';


const SearchBar = () => {
    return (
        <SafeAreaView >
            <TextInput
                placeholder='Ara...'
                style={styles.input}
                onChangeText={(value) => console.log(value)}
            />
        </SafeAreaView>
    )
}

export default SearchBar;