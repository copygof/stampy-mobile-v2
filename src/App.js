import React from 'react'
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './registerScreens'

registerScreens()


// Navigation.startTabBasedApp({
//   tabs: [
//     {
//       label: 'One',
//       screen: 'example.FirstTabScreen', // this is a registered name for a screen
//       title: 'Screen One'
//     },{
//       label: 'eeeeee',
//       screen: 'example.ssss', // this is a registered name for a screen
//       title: 'Screen One'
//     }
//   ]
// });
Navigation.startSingleScreenApp({
  screen: {
    screen: 'example.FirstTabScreen', // unique ID registered with Navigation.registerScreen

    navigatorStyle: {
      navBarHidden: true,
      // iOS only
      statusBarHidden: false,
      statusBarTextColorSchemeSingleScreen: 'light',
      statusBarTextColorScheme: 'light',
      // android only
      statusBarColor: 'rgb(168, 143, 96)'
    } 
  }
})