import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from "yup";

import AppScreen from '../components/AppScreen';
import { AppForm, AppFormField, AppSubmitButton } from '../components/forms';
import AppFormPicker from '../components/forms/AppFormPicker';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
});

const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Camera", value: 3 },
];

export default function ListingEditScreen() {
    return (
        <AppScreen style={styles.container}>
            <AppForm
                initialValues={{ title: '', price: '', description: '', category: null }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    maxLength={100}
                    name="title"
                    placeholder="Title"
                />
                <AppFormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                />
                <AppFormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <AppSubmitButton title='Post' />
            </AppForm>
        </AppScreen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})
