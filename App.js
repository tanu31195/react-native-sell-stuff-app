import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, TextInput } from 'react-native';

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

export default function App() {
  return (
    // <View style={{ backgroundColor: '#f8f4f4', padding: 20 }}>
    //   <Card title='Red jacket' subTitle='$100' image={require('./app/assets/jacket.jpg')} />
    // </View>
    // <AppScreen> 
    // <ListItem title="Tanushka Bandara" subTitle="tanushkabandara@gmail.com" ImageComponent={<Icon name="email"/> }  />
    // </AppScreen>
    <AppScreen>
      <AppTextInput placeholder='Email' icon="email"/>
    </AppScreen>
  );
}

const styles = StyleSheet.create({

})