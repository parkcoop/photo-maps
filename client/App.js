import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView,ActivityIndicator, AsyncStorage, StatusBar } from 'react-native';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/Home'
import {UserContext, ThemeContext} from './src/context'



const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000',
    headers: {
      authorization: ''
    }
  }),
  cache: new InMemoryCache()
});



export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <UserContext.Provider value={{token:'', username: ''}}>
          <HomeScreen />
        </UserContext.Provider>
      </ApolloProvider>
    )
  }
}