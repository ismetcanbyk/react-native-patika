import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import Input from '../components/Input/Input'
import Button from '../components/Button/Button'

function MemberSign({ navigation }) {
    const [userName, setUserName] = useState(null)
    const [userSurname, setUserSurname] = useState(null)
    const [userAge, setUserAge] = useState(null)
    const [userEmail, setUserEmail] = useState(null)
    const [userCity, setUserCity] = useState(null)

    const handleSubmit = () => {
        const user = {
            userName,
            userSurname,
            userAge,
            userEmail,
            userCity
        }

        if (!userName || !userSurname || !userAge || !userEmail || !userCity) {
            Alert.alert('Kebap Fitness', 'Lütfen tüm alanları doldurunuz')
            return;
        } else {
            navigation.navigate('MemberResultScreen', { user })
        }



    }

    return (
        <View>
            <Input label={"Adı"} placeholder={"Üyenin ismini giriniz ... "} onChangeText={setUserName} />
            <Input label={"Soyadı"} placeholder={"Üyenin soyadını giriniz ... "} onChangeText={setUserSurname} />
            <Input label={"Yaş"} placeholder={"Üyenin yaşını giriniz ... "} onChangeText={setUserAge} />
            <Input label={"E-Posta"} placeholder={"Üyenin eposta adresini giriniz ... "} onChangeText={setUserEmail} />
            <Input label={"Şehir"} placeholder={"Üyenin şehrini giriniz ... "} onChangeText={setUserCity} />

            <Button text={"Kaydet"} onPress={handleSubmit} />
        </View>
    )
}

export default MemberSign

