import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './Detail.style'
import useFetch from '../../hooks/useFetch/useFetch'
import Config from 'react-native-config'
import Error from '../../components/Error/Error'
import Loading from '../../components/Loading/Loading'


const Detail = ({ route }) => {
    const id = route.params.id

    const { error, loading, data: product } = useFetch(`${Config.API_URL}/${id}`)

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return (
        <View style={styles.container}>
            <View style={styles.image_container}>
                <Image style={styles.image} source={{ uri: product.image }} />
            </View>
            <View style={styles.body_container}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.desc}>{product.description}</Text>
                <Text style={styles.price}>{product.price} TL</Text>
            </View>
        </View>
    )
}

export default Detail;