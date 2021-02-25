import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';

export default function Card({ subTitle, title, image }) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderRadius: 25,
        marginBottom: 20,
        overflow: 'hidden'
    },
    detailsContainer: {
        padding: 20
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 5
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: 'bold'
    },
    title: {
        marginBottom: 5
    }

})
