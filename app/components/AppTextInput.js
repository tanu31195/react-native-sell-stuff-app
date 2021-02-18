import React from 'react'
import { Platform, StyleSheet, TextInput, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../config/styles'

export default function AppTextInput({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            {icon && (<MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={defaultStyles.colors.medium} />)}
            <TextInput style={defaultStyles.text} {...otherProps} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10,
        borderRadius: 25,
    },
    icon: {
        marginRight: 10
    },
    // textInput: {
    //     color: colors.dark,
    //     fontSize: 18,
    //     fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    // }
})
