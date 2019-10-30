import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider, graphql } from 'react-apollo';
import {AsyncStorage} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Feed from '../Feed';
import LoginScreen from '../Login'

// const client = new ApolloClient({
//     link: new HttpLink({
//       uri: 'http://localhost:4000',
//       headers: {
//         authorization: ''
//       }
//     }),
//     cache: new InMemoryCache()
//   });

const AppNavigator = createStackNavigator({
  Home: createAppContainer(LoginScreen),
  // Test: Feed
});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AppNavigator,
  }
));

// export default class HomeScreen extends React.Component {
//     render() {
//       return (
//         <ApolloProvider client={client}>
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//           <Text>Home Screen</Text>
//           <Button
//             title="Go to Details"
//             onPress={() => this.props.navigation.navigate('Test')}
//           />
//         </View>
//         </ApolloProvider>
//       );
//     }
//   }
  

// export default class HomeScreen extends React.Component {
//     static navigationOptions = {
//       title: 'Welcome to the app!',
//     };
  
//     render() {
//       return (
//         <ApolloProvider client={client}>
//         {/* <View style={styles.container}>
//           <Button title="Show me more of the app" onPress={this._showMoreApp} />
//           <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
//         </View> */}
//         <AppNavigator />
//     </ApolloProvider>
//       );
//     }
  
//     _showMoreApp = () => {
//       this.props.navigation.navigate('Other');
//     };
  
//     _signOutAsync = async () => {
//       await AsyncStorage.clear();
//       this.props.navigation.navigate('Auth');
//     };
//   }

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: 'white',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     post_container: {
//       backgroundColor: 'red',
//       width: 200,
//       borderRadius: 100,
//       borderWidth: 0.5,
//       borderColor: '#d6d7da',
//       margin: 5,
//       padding: 10
//     },
//     title: {
//       fontSize: 19,
//       fontWeight: 'bold',
//     },
//     activeTitle: {
//       color: 'red',
//     },
//   });
  