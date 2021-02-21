import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string()
        .required()
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .label('Password')
});

export default function LoginScreen() {

    return (
        <AppScreen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')} />

            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, errors }) => (
                    <>
                        <AppTextInput
                            autoCapitalize='none'
                            autoCorrect={false}
                            icon='email'
                            keyboardType='email-address'
                            onChangeText={handleChange('email')}
                            placeholder='Email'
                            textContentType='emailAddress'
                        />
                        <AppText style={{ color: 'red' }}>{errors.email}</AppText>
                        <AppTextInput
                            autoCapitalize='none'
                            autoCorrect={false}
                            icon='lock'
                            onChangeText={handleChange('password')}
                            placeholder='Password'
                            secureTextEntry
                            textContentType='password'
                        />
                        <AppText style={{ color: 'red' }}>{errors.password}</AppText>
                        <AppButton onPress={handleSubmit} title='Login' />
                    </>
                )}
            </Formik>
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
