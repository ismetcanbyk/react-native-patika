import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from './MealsCard.style'

const MealsCard = ({ meals, onSelect }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image source={{ uri: meals.strMealThumb }} style={styles.image} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{meals.strMeal}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default MealsCard