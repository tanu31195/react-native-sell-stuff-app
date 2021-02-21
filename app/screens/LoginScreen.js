import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import AppButton from '../components/AppButton'
import AppScreen from '../components/AppScreen'
import AppTextInput from '../components/AppTextInput'

export default function LoginScreen() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <AppScreen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')} />
            <AppTextInput
                autoCapitalize='none'
                autoCorrect={false}
                icon='email'
                keyboardType='email-address'
                onChangeText={text => setEmail(text)}
                placeholder='Email'
                textContentType='emailAddress'
            />
            <AppTextInput
                autoCapitalize='none'
                autoCorrect={false}
                icon='lock'
                onChangeText={text => setPassword(text)}
                placeholder='Password'
                secureTextEntry
                textContentType='password'
            />
            <AppButton color='primary' onPress={() => console.log(email, password)} title='Login'/>
        </AppScreen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        alignSelf: 'center',
        height: 80,
        marginBottom: 20,
        marginTop: 50,
        width: 80,
    }
})
