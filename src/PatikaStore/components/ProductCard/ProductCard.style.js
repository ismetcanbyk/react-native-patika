import { Dimensions, StyleSheet } from "react-native";


export default StyleSheet.create({

    container: {
        backgroundColor: '#eceff1',
        padding: 10,
        margin: 10,
        borderRadius: 7,
    },
    image: {
        height: Dimensions.get("window").height / 4,
        width: Dimensions.get("window").width / 2.65,
        borderRadius: 20,
    },
    inner_container: {
        width: Dimensions.get("window").width / 2.6,
        margin: 3,
        borderRadius: 7,
    },
    title: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
    },
    price: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'gray',
    },
    inStock: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 15,
    }

});