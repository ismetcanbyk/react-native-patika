import { View, Text, FlatList } from 'react-native'
import React from 'react'
import MealDetailCard from '../../components/MealDetailCard';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const Detail = ({ route }) => {
    const { id } = route.params;

    const { error, loading, data: meal } = useFetch(Config.MEAL_DETAIL_URL + id)

    const renderMeal = ({ item }) => <MealDetailCard meal={item} />

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }

    return (
        <View>
            <FlatList
                data={meal.meals}
                renderItem={renderMeal}
            />
        </View>
    )
}

export default Detail