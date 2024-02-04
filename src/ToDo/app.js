// App.js with ToDo app


import React, { useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
} from 'react-native';


import Header from './ToDo/components/Header';
import Input from './ToDo/components/Input/Input';
import ToDoCard from './ToDo/components/ToDoCard/ToDoCard';



function App() {
    const [data, setData] = useState(["Çöp dök.", "Su iç"]);
    const [counter, setCounter] = useState(2);

    const keyExtractor = (item, index) => index.toString();

    const handleData = (value) => {
        setData([...data, value])
        setCounter(counter + 1)
    }
    const handleIsDone = (value) => {
        if (value) {
            setCounter(counter - 1)
        } else {
            setCounter(counter + 1)
        }
    }


    return (
        <SafeAreaView style={styles.container}>
            <Header title="Yapılacaklar" counter={counter} />

            <FlatList
                data={data}
                renderItem={({ item }) => <ToDoCard title={item} handle={handleIsDone} />}
                keyExtractor={keyExtractor}
            />

            <Input onPress={handleData} />


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#102027',
    },

});


