import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {MaterialCommunityIcons} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';

import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'

import * as firebase from 'firebase'

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import NoticeScreen from './screens/NoticeScreen';
import LeaveScreen from './screens/LeaveScreen';

var firebaseConfig = {
  apiKey: "AIzaSyA6jSq3axCr2nC_SPlhLjAZO1Uh3SoIlDQ",
  authDomain: "cutiku-65322.firebaseapp.com",
  databaseURL: "https://cutiku-65322.firebaseio.com",
  projectId: "cutiku-65322",
  storageBucket: "cutiku-65322.appspot.com",
  messagingSenderId: "1046353977238",
  appId: "1:1046353977238:web:3f5267cf61aee3123107b7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppTabNavigator = createBottomTabNavigator(
  {
    Calendar: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <AntDesign name="calendar" size={24} color={tintColor}/>
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <AntDesign name="user" size={24} color={tintColor}/>
      }
    },
    Leave: {
      screen: LeaveScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <AntDesign name="solution1" size={24} color={tintColor}/>
      }
    },
    Notice: {
      screen: NoticeScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <MaterialCommunityIcons name="bell" size={24} color={tintColor}/>
      }
    },
  }
)

const AuthStack = createStackNavigator({
  Login: LoginScreen,
})

export default createAppContainer(

  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App:AppTabNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: "Loading"
    }
  )
)