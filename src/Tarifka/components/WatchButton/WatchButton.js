import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './WatchButton.style'


const WatchButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>Watch on Youtube</Text>
        </TouchableOpacity>
    )
}

export default WatchButton