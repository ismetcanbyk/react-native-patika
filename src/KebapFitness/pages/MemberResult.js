import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


function MemberResult({ route }) {
    const { user } = route.params;

    return (
        <View>
            <Text style={styles.message}>Kayıt Tamamlandı</Text>
            <Text style={styles.label}>Üye adı: {user.userName}</Text>
            <Text style={styles.label}>Üye soyadı: {user.userSurname} </Text>
            <Text style={styles.label}>Üye yas: {user.userAge} </Text>
            <Text style={styles.label}>Üye eposta: {user.userEmail} </Text>
            <Text style={styles.label}>Üye şehiri: {user.userCity} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 5,
        color: 'black'
    },
    message: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 50,
        color: 'black'
    }
})


export default MemberResult;