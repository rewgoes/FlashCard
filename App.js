import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import DeckList from './components/DeckList'

const MainNavigator = createStackNavigator({
  Home: {
    screen: DeckList,
    navigationOptions: {
      title: "Flashcards",
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'purple',
      },
    }
  },
})

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MainNavigator />
      </View>
    )
  }
}