import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import AppButton from './app/components/AppButton';

import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import Card from './app/components/Card';

export default function App({ }) {
  return (
    // <View style={{ backgroundColor: '#f8f4f4', padding: 20 }}>
    //   <Card title='Red jacket' subTitle='$100' image={require('./app/assets/jacket.jpg')} />
    // </View>
    <ListingDetailsScreen />
  );
}

const styles = StyleSheet.create({

})