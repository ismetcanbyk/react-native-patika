import React, { useState } from 'react';
import { SafeAreaView, TextInput, View } from 'react-native';
import styles from './Input.style';
import InputButton from '../Button/InputButton';


const Input = (props) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (text) => {
        setInputValue(text);
    };

    const handleData = () => {
        props.onPress(inputValue);
        setInputValue('');
    }
    return (

        <SafeAreaView>
            <View style={styles.container}>

                <TextInput style={styles.input} placeholder="Yapılacak..." value={inputValue} onChangeText={handleInputChange} placeholderTextColor={'#6e7274'} />

                <InputButton onPress={handleData} disabled={inputValue === ''} />
            </View>
        </SafeAreaView>
    );

}

export default Input;