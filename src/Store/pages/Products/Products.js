import React from 'react'
import { FlatList, Text, View } from 'react-native'
import styles from './Products.style'
import Config from 'react-native-config'
import ProductCard from '../../components/ProductCard/ProductCard'
import useFetch from '../../hooks/useFetch/useFetch'
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'
const Products = ({ navigation }) => {

    const { error, loading, data: products } = useFetch(Config.API_URL)

    const handleProductSelect = (id) => {
        navigation.navigate('DetailPage', { id });
    }

    const renderProduct = ({ item }) => <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />

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