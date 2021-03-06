import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import AppScreen from '../components/AppScreen';
import Icon from '../components/Icon';
import { ListItem, ListItemSeparator } from '../components/lists';
import colors from '../config/colors';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    }
]

export default function AccountScreen() {
    return (
        <AppScreen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Tanushka Bandara"
                    subTitle="tanushkabandara@gmail.com"
                    image={require('../assets/profile.png')}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />}
                        />
                    }
                    ItemSeparatorComponent={ListItemSeparator}
                />
            </View>
            <ListItem title="Log out"
                IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
            />
        </AppScreen>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    screen: {
        backgroundColor: colors.light
    }
})
