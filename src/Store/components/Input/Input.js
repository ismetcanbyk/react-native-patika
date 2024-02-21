import { View, Text, TextInput } from 'react-native'
import React from 'react'
import style from './Input.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Input = ({ placeholder, onChangeText, value, iconName, isSecure }) => {
    return (
        <View style={style.container}>
            <TextInput placeholder={placeholder} style={style.input} onChangeText={onChangeText} value={value} secureTextEntry={isSecure} />
            <Icon name={iconName} size={25} color='black' style={style.icon} />
        </View>
    )
}

export default Input