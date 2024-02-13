import { View, Text } from 'react-native'
import React from 'react'

const Meals = ({ route }) => {
    const categoryName = route.params.id
    console.log(categoryName)
    return (
        <View>
            <Text>Meals</Text>
        </View>
    )
}

export default Meals