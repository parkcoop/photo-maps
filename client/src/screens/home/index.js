import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../Login'
import Feed from '../Feed'

const AppNavigator = createStackNavigator({
  Home: createAppContainer(Feed),
  // Test: Feed
});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AppNavigator,
  }
));
