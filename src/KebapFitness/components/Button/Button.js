import React from 'react'
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native'
import styles from './Button.style'




export default Button = ({ onPress, text }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.Text}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}


