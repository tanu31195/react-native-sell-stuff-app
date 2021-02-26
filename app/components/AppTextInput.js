import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles';

export default function AppTextInput({ icon, width='100%', ...otherProps }) {
    return (
        <View style={[styles.container, {width}]}>
            {icon && (<MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={defaultStyles.colors.medium} />)}
            <TextInput
                placeholderTextColor={defaultStyles.colors.medium}
                style={[styles.textInput, defaultStyles.text]}
                {...otherProps} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10,
        borderRadius: 25,
    },
    icon: {
        marginRight: 10
    },
    textInput: {
        flex: 1
    }
})
