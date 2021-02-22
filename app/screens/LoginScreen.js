import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppButton from '../components/AppButton';
import AppScreen from '../components/AppScreen';
import AppFormField from '../components/AppFormField';

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
                {() => (
                    <>
                        <AppFormField
                            autoCapitalize='none'
                            autoCorrect={false}
                            icon='email'
                            keyboardType='email-address'
                            name='email'
                            placeholder='Email'
                            textContentType='emailAddress'
                        />
                        <AppFormField
                            autoCapitalize='none'
                            autoCorrect={false}
                            icon='lock'
                            name='password'
                            placeholder='Password'
                            secureTextEntry
                            textContentType='password'
                        />
                        <AppSubmitButton title='Login' />
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
