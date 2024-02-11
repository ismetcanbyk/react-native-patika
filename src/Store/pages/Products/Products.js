import React from 'react'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import styles from './Products.style'
import Config from 'react-native-config'
import ProductCard from '../../components/ProductCard/ProductCard'
import useFetch from '../../hooks/useFetch/useFetch'
const Products = () => {

    const { error, loading, products } = useFetch(Config.API_URL)


    const renderProduct = ({ item }) => <ProductCard product={item} />

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />
    }

    if (error) {
        return <Text>{error}</Text>
    }

    return (
        <View style={styles.container}>
            <FlatList data={products} renderItem={renderProduct} />
        </View>
    )
}

export default Products