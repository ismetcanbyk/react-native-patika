import React from 'react';
import { SafeAreaView, Text, TextInput, View, Button, Touchable, TouchableOpacity } from 'react-native';
import styles from './InputButton.style';

const InputButton = (props) => (
    <SafeAreaView>
        <View style={styles.container}>

            <TouchableOpacity style={styles.button} onPress={props.onPress} disabled={props.disabled}>
                <Text style={styles.buttonText}>Kaydet</Text>
            </TouchableOpacity>

        </View>
    </SafeAreaView>
);

export default InputButton;