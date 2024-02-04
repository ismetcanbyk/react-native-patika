import { StyleSheet } from "react-native";

export default StyleSheet.create({

    containerTrue: {
        backgroundColor: '#7da453',
        margin: 16,
        marginBottom: 2,
        padding: 16,
        borderRadius: 11,
    },

    containerFalse: {
        backgroundColor: '#37474f',
        margin: 16,
        marginBottom: 2,
        padding: 16,
        borderRadius: 11,
    },



    buttonTrue: {
        color: 'white',
        fontSize: 19,
    },

    buttonFalse: {
        color: '#7e7e7e',
        fontSize: 19,
        textDecorationLine: 'line-through',
    }

})