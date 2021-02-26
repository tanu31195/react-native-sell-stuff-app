import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';

import AppScreen from '../components/AppScreen';
import { ListItem, ListItemDeleteAction, ListItemSeparator } from '../components/lists';

const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/profile.png')
    },
    {
        id: 2,
        title: 'T2 Minim excepteur sunt duis esse non irure ullamco id. Ut aliqua sit sit consectetur dolore ipsum. Anim minim eiusmod eu amet. Id non voluptate aliqua magna enim exercitation ipsum.',
        description: 'D2 Laborum consequat amet consectetur cupidatat enim proident consequat. Sunt adipisicing elit mollit mollit exercitation commodo occaecat deserunt enim id velit est sint. Irure sunt esse velit quis nulla proident.',
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

const styles = StyleSheet.create({})
