import { View, Text, Image, Alert } from 'react-native';
import React, { useEffect } from 'react';
import style from './Login.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Formik } from 'formik';
import usePost from '../../hooks/usePost';
import Config from 'react-native-config';


const Login = ({ navigation }) => {

    const { data, error, loading, postData, hasData } = usePost();

    useEffect(() => {
        if (error) {
            Alert.alert('Hata', 'error')
        }

        if (data.token) {
            if (data.status === 'error') {
                Alert.alert('Hata', 'Hatalı Kullanıcı Adı veya Şifre');
            } else {
                navigation.replace('ProductPage');
            }
        }
    }, [error, data, navigation])

    const handleLogin = (values) => {
        postData(Config.API_LOGIN_URL, values)
    }

    return (
        <View style={style.container}>
            <View style={style.logo_container}>
                <Image source={require('../../assets/store.png')} style={style.logo} />
            </View>

            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={handleLogin}
            >
                {({ handleSubmit, handleChange, values }) => (
                    <View style={style.body_container}>
                        <Input placeholder="Kullanıcı Adı " value={values.username} onChangeText={handleChange('username')} iconName={'account'} />
                        <Input placeholder="Şifre" value={values.password} onChangeText={handleChange('password')} iconName={'key'} isSecure />
                        <Button title="Giriş Yap" onPress={handleSubmit} loading={loading} />
                    </View>
                )}
            </Formik>

        </View>
    )
}

export default Login