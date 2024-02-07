import React from 'react'
import { SafeAreaView, TextInput, View, Text } from 'react-native'
import styles from './Input.style';


function Input({ label, placeholder, onChangeText }) {



    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View>
                <TextInput placeholder={placeholder} onChangeText={onChangeText} style={styles.input_container} />
            </View>
        </View>
    )
}


export default Input;