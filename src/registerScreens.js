import React from 'react'
import _ from 'lodash'
import { View, Text } from 'react-native'
import { Navigation } from 'react-native-navigation'
import moduleRegistor from './module'

const combindRoute = {}
// combind route with page from module
Object.keys(moduleRegistor)
.map(key => moduleRegistor[key].module)
.map(({ page }) => {
  if (!_.isEmpty(page)) {
    Object.keys(page)
    .map(pageName => {
      combindRoute[pageName] = {
        screen: page[pageName].page,
        ...page[pageName].options
      }
    })
  }
})

console.log('combindRoute', combindRoute)

const FirstTabScreen = () => (
  <View>
    <Text>fdsfsdfdsfsdf</Text>
  </View>
)

export function registerScreens() {
  Navigation.registerComponent('example.FirstTabScreen', () => combindRoute.launch.screen);
  Navigation.registerComponent('example.ssss', () => FirstTabScreen);
}