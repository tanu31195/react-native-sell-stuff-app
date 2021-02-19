import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, TextInput, Switch } from 'react-native';

import AccountScreen from './app/screens/AccountScreen';
import AppScreen from './app/components/AppScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

const categories = [
  { label: 'iPhones', value: 1 },
  { label: 'iPads', value: 2 },
  { label: 'iPods', value: 3 },
]

export default function App() {
  const [category, setCategory] = useState(categories[0])
  return (
    <AppScreen>
      <AppPicker
        icon='apps'
        items={categories}
        onSelectItem={item => setCategory(item)}
        placeholder='Category'
        selectedItem={category}
      />
      <AppTextInput icon='email' placeholder='Email' />
    </AppScreen>
  );
}

const styles = StyleSheet.create({

})