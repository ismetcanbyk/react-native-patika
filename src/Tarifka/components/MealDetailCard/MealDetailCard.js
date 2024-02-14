import { View, Text, Image, Linking } from 'react-native'
import React from 'react'
import styles from './MealDetailCard.style'
import WatchButton from '../WatchButton'

const MealDetailCard = ({ meal }) => {
    const linkingYoutube = () => {
        Linking.openURL(meal.strYoutube)
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
            <View style={styles.headers} >
                <Text style={styles.title} >{meal.strMeal}</Text>
                <Text style={styles.country} >{meal.strArea}</Text>
            </View>
            <Text style={styles.description} >{meal.strInstructions} </Text>
            <WatchButton onPress={linkingYoutube} />
        </View>
    )
}

export default MealDetailCard