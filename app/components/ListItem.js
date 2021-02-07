import React from 'react'
import { StyleSheet, Image, View } from 'react-native'

import colors from '../config/colors'
import AppText from './AppText'

export default function ListItem({ image, title, subTitle }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image}></Image>
            <View>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginHorizontal: 10
    },
    subTitle: {
        color: colors.medium
    },
    title: {
        fontWeight: '500'
    }
})
