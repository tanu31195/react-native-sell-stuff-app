import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import AppText from '../components/AppText'
import ListItem from '../components/ListItem'
import colors from '../config/colors'

export default function ListingDetailsScreen() {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Red Jacket</AppText>
                <AppText style={styles.price}>$100</AppText>
            </View>
            <View style={styles.userContainer}>
                <ListItem
                // TODO Adding images
                    image={require('../assets/profile.png')}
                    title='Tanushka Bandara'
                    subTitle='5 Listings'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20
    },
    image: {
        width: '100%',
        height: 200
    },
    price: {
        color: colors.secondary,
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10
    },
    title: {
        fontSize: 24,
        fontWeight: '500'
    },
    userContainer: {
        marginTop: 40
    }
})
