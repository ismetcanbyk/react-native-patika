import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import style from './Button.style';

const Button = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={style.container} onPress={onPress}>
            <Text style={style.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button