import React from 'react';
import { StyleSheet, Image, View, TouchableHighlight } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';

export default function ListItem({ image, title, subTitle, onPress }) {
    return (
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
            <View style={styles.container}>
                <Image style={styles.image} source={image}></Image>
                <View>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 10
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
