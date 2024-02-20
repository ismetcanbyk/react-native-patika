import { Dimensions, StyleSheet } from "react-native";

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    logo_container: {
        flex: 1,
        justifyContent: 'center',
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        height: deviceSize.height / 3,
        width: deviceSize.width / 0.9,
        resizeMode: 'contain',

    },
    body_container: {
        flex: 1
    }
})