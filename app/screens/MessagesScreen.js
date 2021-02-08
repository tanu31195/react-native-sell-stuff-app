import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import AppScreen from '../components/AppScreen';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';

const messages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/profile.png')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/profile.png')
    },
    {
        id: 3,
        title: 'T3',
        description: 'D3',
        image: require('../assets/profile.png')
    },
]

export default function MessagesScreen() {
    return (
        <AppScreen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log('Message selected', item)}
                    />}
                ItemSeparatorComponent={ListItemSeparator}
            />
        </AppScreen>
    )
}

const styles = StyleSheet.create({

})
