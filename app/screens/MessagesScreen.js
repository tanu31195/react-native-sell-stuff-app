import React, { useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import AppScreen from '../components/AppScreen';
import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';

const initialMessages = [
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
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        console.log(message);
        setMessages(messages.filter((m) => m.id !== message.id));
    }

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
                        renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                    />}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => setMessages(initialMessages)}
            />
        </AppScreen>
    )
}

const styles = StyleSheet.create({

})