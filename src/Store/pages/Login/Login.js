import { View, Text, Image } from 'react-native';
import React from 'react';
import style from './Login.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Formik } from 'formik';

const Login = () => {
    const handleLogin = (values) => {
        console.log(values);
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
                        <Button title="Giriş Yap" onPress={handleSubmit} />
                    </View>
                )}
            </Formik>

        </View>
    )
}

export default Login