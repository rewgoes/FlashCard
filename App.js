import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { Ionicons } from '@expo/vector-icons'
import { createStackNavigator } from 'react-navigation'
import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'

const MainNavigator = createStackNavigator({
  Home: {
    screen: DeckList,
    navigationOptions: ({ navigation }) => ({
      title: "Flashcards",
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'purple',
      },
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('AddDeck')}>
          <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 10,
          }}>
            <Ionicons name='md-add' color='white' size={28} />
          </View>
        </TouchableOpacity>
      ),
    })
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      title: "New Deck",
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'purple',
      },
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}