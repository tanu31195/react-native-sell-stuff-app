import React, { useState } from 'react';
import { Button, FlatList, Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles';
import AppText from './AppText';
import AppScreen from './AppScreen';
import PickerItem from './PickerItem';

export default function AppPicker({ icon, items, onSelectItem, placeholder, selectedItem }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && (<MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={defaultStyles.colors.medium} />)}
                    {
                        selectedItem ?
                            (<AppText style={styles.text}> {selectedItem.label} </AppText>) :
                            (<AppText style={styles.placeholder}> {placeholder} </AppText>)
                    }
                    <MaterialCommunityIcons style={styles.icon} name='chevron-down' size={20} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType='slide'>
                <AppScreen>
                    <Button title='Close' onPress={() => setModalVisible(false)} />
                    <FlatList
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({ item }) =>
                            <PickerItem
                                label={item.label}
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectItem(item)
                                }
                                } />}
                    />
                </AppScreen>
            </Modal>
        </>
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
    placeholder: {
        color: defaultStyles.colors.medium,
        flex: 1
    },
    text: {
        flex: 1,
    },
})
