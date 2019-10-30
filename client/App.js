import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView,ActivityIndicator, AsyncStorage, StatusBar } from 'react-native';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider, graphql } from 'react-apollo';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Feed from './src/screens/Feed'
import HomeScreen from './src/screens/Home'
import LoginScreen from './src/screens/Login'


class OtherScreen extends React.Component {
  static navigationOptions = {
    title: 'Lots of features here',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
        <StatusBar barStyle="default" />
      </View>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}


class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: LoginScreen,
  Settings: SettingsScreen,
});

// export default createAppContainer(TabNavigator);


class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    console.log(userToken)
    this.props.navigation.navigate('Auth');
    // this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <Text>Loading...</Text>
    );
  }
}
// const AppNavigator = createStackNavigator({
//   Home: HomeScreen,
//   Test: Feed
// });

const AuthStack = createStackNavigator({ 
  SignIn: LoginScreen 
});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: createAppContainer(HomeScreen),
    Auth: LoginScreen,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
// const AppContainer = createAppContainer(AppNavigator);

// export default class App extends React.Component {
//   render() {
//     return (
//     <ApolloProvider client={client}>
//       <AppContainer />
//     </ApolloProvider>
//     )
//   }
// }
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
