import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import AppScreen from '../components/AppScreen';
import ErrorMessage from '../components/ErrorMessage';

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
                {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                    <>
                        <AppTextInput
                            autoCapitalize='none'
                            autoCorrect={false}
                            icon='email'
                            keyboardType='email-address'
                            onBlur={() => setFieldTouched('email')}
                            onChangeText={handleChange('email')}
                            placeholder='Email'
                            textContentType='emailAddress'
                        />
                        <ErrorMessage error={errors.email} visible={touched.email}/>
                        <AppTextInput
                            autoCapitalize='none'
                            autoCorrect={false}
                            icon='lock'
                            onBlur={() => setFieldTouched('password')}
                            onChangeText={handleChange('password')}
                            placeholder='Password'
                            secureTextEntry
                            textContentType='password'
                        />
                        <ErrorMessage error={errors.password} visible={touched.password}/>
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
