import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../Login'

const AppNavigator = createStackNavigator({
  Home: {
    screen: LoginScreen,
  },
});

export default createAppContainer(AppNavigator);