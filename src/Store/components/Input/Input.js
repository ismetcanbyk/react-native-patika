import { View, Text, TextInput } from 'react-native'
import React from 'react'
import style from './Input.style'

const Input = ({ placeholder, onChangeText, value }) => {
    return (
        <View style={style.container}>
            <TextInput placeholder={placeholder} style={style.input} onChangeText={onChangeText} value={value} />
        </View>
    )
}

export default Input