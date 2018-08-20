import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
// import AppStore from './AppStore';
import {observer} from 'mobx-react';

import Home from './src/Screens/Home';
import Schedule from './src/Screens/Schedule';
import ModalScreen from './src/Components/ModalScreen'

const MainStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Schedule: {
      screen: Schedule,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#6bdeef',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

@observer
export default class App extends React.Component {

  render(){
    return <RootStack />;
  }
}
