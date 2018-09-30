import React, { Component } from 'react'
import {
  View,
  Text,  
} from 'react-native'

import {createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import HomeMainScreen from './src/screens/HomeMainScreen'
import AboutMainScreen from './src/screens/AboutMainScreen';
import EventMainScreen from './src/screens/EventsMainScreen';
import ChatMainScreen from './src/screens/ChatMainScreen';
import ProfileMainScreen from './src/screens/ProfileMainScreen';
import HomeDetailScreen from './src/screens/HomeDetailScreen';

const HomeStackNavigator = createStackNavigator({  
  Home:{
    screen: HomeMainScreen,
    
  },
  HomeDetail:{
    screen: HomeDetailScreen
  }
  
},{
  navigationOptions:{
    headerTintColor:'white',
    headerStyle:{
      backgroundColor:'#1D1D1D'
    },
    tabBarLabel:'Hi'
  }
})

const RootNavigator = createBottomTabNavigator({
  TabHome:{
    screen: HomeStackNavigator,    
  },
  TabAbout:{
    screen: AboutMainScreen
  },
  TabEvents:{
    screen: EventMainScreen
  },
  TabChat: {
    screen: ChatMainScreen
  },
  TabProfile:{
    screen: ProfileMainScreen
  }

})

class App extends Component {
  render(){
    return (      
      <RootNavigator/>
    )
  }
}

export default App;