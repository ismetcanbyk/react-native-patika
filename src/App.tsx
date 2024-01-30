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


function App(): React.JSX.Element {

  const render = ({item}: {item: any}) => <ProductCard product={item}/>;
  const keyExtractor = (item: any) => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
    
      <SearchBar/>

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



export default App;
