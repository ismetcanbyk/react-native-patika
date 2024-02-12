import React from 'react'
import { FlatList, Text, View } from 'react-native'
import styles from './Products.style'
import Config from 'react-native-config'
import ProductCard from '../../components/ProductCard/ProductCard'
import useFetch from '../../hooks/useFetch/useFetch'
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'
const Products = () => {

    const { error, loading, products } = useFetch(Config.API_URL)


    const renderProduct = ({ item }) => <ProductCard product={item} />

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return (
        <View style={styles.container}>
            <FlatList data={products} renderItem={renderProduct} />
        </View>
    )
}

export default Products