import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider, graphql } from 'react-apollo';
import { Query } from 'react-apollo'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://192.168.86.32:4000',
    headers: {
      authorization: ''
    }
  }),
  cache: new InMemoryCache()
});

const Test = () => {
  return (
    <View>This is test</View>
  )
}

const HomeScreen = () => {
  return (
    <View><Text>Home</Text></View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  post_container: {
    backgroundColor: 'red',
    width: 200,
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    margin: 5,
    padding: 10
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  activeTitle: {
    color: 'red',
  },
});

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
});
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
    <ApolloProvider client={client}>
      <AppContainer />
    </ApolloProvider>
    )
  }
}