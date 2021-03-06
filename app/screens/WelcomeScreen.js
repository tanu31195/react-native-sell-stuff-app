import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';

import AppButton from '../components/AppButton';
import colors from '../config/colors';

export default function WelcomeScreen() {
    return (
        <ImageBackground blurRadius={5} style={styles.background} source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text style={styles.tagline}>Sell what you don't need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title='Login' color='primary' onPress={() => console.log('Login Pressed')} />
                <AppButton title='Register' color='secondary' onPress={() => console.log('Register Pressed')} />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonContainer: {
        padding: 10,
        width: '100%'
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor:  colors.secondary,
    },
    tagline: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingVertical: 10
    }
})
