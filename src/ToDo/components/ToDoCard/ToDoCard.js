import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import styles from './ToDoCard.style';


const ToDoCard = ({ title, handle }) => {

    const [isDone, setIsDone] = useState(true)


    const handleIsDone = () => {
        setIsDone(!isDone)
        if (isDone) {
            handle(true)
        } else {
            handle(false)
        }
    }

    return (
        <SafeAreaView >
            <TouchableOpacity onPress={handleIsDone}>
                <View style={isDone ? styles.containerTrue : styles.containerFalse}>
                    <Text style={isDone ? styles.buttonTrue : styles.buttonFalse}>{title}</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default ToDoCard;