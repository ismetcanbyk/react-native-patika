// App.js with PatikaStore

import React from 'react';
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
} from 'react-native';


import ProductCard from './PatikaStore/components/ProductCard';
import data from './PatikaStore/store_data.json';
import SearchBar from './PatikaStore/components/SearchBar';
import Header from './PatikaStore/components/Header';


function App() {

    const render = ({ item }) => <ProductCard product={item} />;
    const keyExtractor = (item) => item.id.toString();

    return (
        <SafeAreaView style={styles.container}>
            <Header />

            <SearchBar />

            <FlatList
                data={data}
                renderItem={render}
                keyExtractor={keyExtractor}
                numColumns={2}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});