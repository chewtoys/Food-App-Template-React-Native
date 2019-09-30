import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AppContainer from './src/navigations/AppNavigation';
import HomeScreen from './src/screens/Home/HomeScreen';
import CategoriesScreen from './src/screens/Categories/CategoriesScreen';
import {
  DrawerNavigator,
  StackNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import SplashScreen from './src/screens/Splash/SplashScreen';

class FoodApp extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default FoodApp;
