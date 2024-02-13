import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from './CategoriesCard.style'

const CategoriesCard = ({ category, onSelect }) => {

    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image source={{ uri: category.item.strCategoryThumb }} style={styles.image} />
                <Text style={styles.title}>{category.item.strCategory}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CategoriesCard