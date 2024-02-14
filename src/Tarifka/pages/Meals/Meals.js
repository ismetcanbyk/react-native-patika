import { View, Text, FlatList } from 'react-native'
import React from 'react'
import useFetch from '../../hooks/useFetch'
import Config from 'react-native-config'
import MealsCard from '../../components/MealsCard'

import styles from './Meals.style'
import Loading from '../../components/Loading'
import Error from '../../components/Error'

const Meals = ({ route, navigation }) => {
    const categoryName = route.params.id

    const { error, loading, data: meals } = useFetch(Config.CATEGORY_DETAIL_URL + categoryName)
    const handleSelect = (id) => {
        navigation.navigate('DetailPage', { id })
    }

    const renderMeals = ({ item }) => <MealsCard meals={item} onSelect={() => handleSelect(item.idMeal)} />

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={meals.meals}
                renderItem={renderMeals}
            />
        </View>
    )
}

export default Meals