import { Dimensions, StyleSheet } from 'react-native'

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {

    },
    image_container: {
        padding: 10,
    },
    image: {
        width: deviceSize.width,
        height: deviceSize.height / 3,
        resizeMode: 'contain',
        backgroundColor: 'white',
    },
    body_container: {
        margin: 20,
    },
    title: { fontWeight: 'bold', fontSize: 20, color: "black" },
    desc: { fontStyle: 'italic', marginVertical: 10 },
    price: { textAlign: 'right', fontSize: 22, fontWeight: 'bold', color: "black" },
})