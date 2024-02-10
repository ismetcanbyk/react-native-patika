import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import styles from './Products.style'
import Config from 'react-native-config'
import axios from 'axios'
import ProductCard from '../../components/ProductCard/ProductCard'
const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const { data } = await axios.get(Config.API_URL)
        setProducts(data)
    }

    const renderProduct = ({ item }) => <ProductCard product={item} />

    return (
        <View style={styles.container}>
            <FlatList data={products} renderItem={renderProduct} />
        </View>
    )
}

export default Products