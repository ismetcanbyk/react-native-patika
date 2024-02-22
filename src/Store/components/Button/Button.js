import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import style from './Button.style';

const Button = ({ title, onPress, loading }) => {
    return (
        <TouchableOpacity style={style.container} onPress={onPress} disabled={loading} >
            {loading ? (<ActivityIndicator color={'black'} />) : (
                <Text style={style.title}>{title}</Text>
            )}

        </TouchableOpacity>
    )
}

export default Button