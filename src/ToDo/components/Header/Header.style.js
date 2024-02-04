import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    header: {
        color: '#ffa500',
        fontWeight: 'bold',
        margin: 12,
        fontSize: 40,

    },

    counter: {
        color: '#ffa500',
        fontWeight: 'bold',
        margin: 12,
        fontSize: 40,
        marginStart: Dimensions.get("window").width / 3.5
    }

});