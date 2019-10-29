import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView,ActivityIndicator, AsyncStorage, StatusBar } from 'react-native';


export default class SignInScreen extends React.Component {
    static navigationOptions = {
      title: 'Please sign in',
    };
  
    render() {
      return (
        <View style={styles.container}>
          <Button title="Sign in!" onPress={this._signInAsync} />
        </View>
      );
    }
  
    _signInAsync = async () => {
      await AsyncStorage.setItem('userToken', 'abc');
      this.props.navigation.navigate('App');
    };
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
  