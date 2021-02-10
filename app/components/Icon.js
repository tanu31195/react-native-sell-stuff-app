import React from 'react'
import { StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'

export default function Icon({ name, size = 40, backgroundColor = colors.black, iconColor = colors.white }) {
    return (
        <View style={{
            width: size,
            height: size,
            backgroundColor,
            borderRadius: size / 2,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />

        </View>
    )
}

const styles = StyleSheet.create({

})