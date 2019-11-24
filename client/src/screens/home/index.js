import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../Login'

const Dashboard = () => {
  return (
    <View></View>
  )
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: LoginScreen,
    main: Dashboard,
  },
});

export default createAppContainer(AppNavigator);