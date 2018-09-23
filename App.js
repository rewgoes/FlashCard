import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { Ionicons } from '@expo/vector-icons'
import { createStackNavigator } from 'react-navigation'
import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'
import DeckDetail from './components/DeckDetail'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'
import { primaryColor, primaryTextColor } from './utils/colors'

const MainNavigator = createStackNavigator({
  Home: {
    screen: DeckList,
    navigationOptions: ({ navigation }) => ({
      title: "Flashcards",
      headerTintColor: primaryTextColor,
      headerStyle: {
        backgroundColor: primaryColor,
      },
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('AddDeck')}>
          <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 10,
          }}>
            <Ionicons name='md-add' color={primaryTextColor} size={28} />
          </View>
        </TouchableOpacity>
      ),
    })
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      title: "New Deck",
      headerTintColor: primaryTextColor,
      headerStyle: {
        backgroundColor: primaryColor,
      },
    }
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      headerTintColor: primaryTextColor,
      headerStyle: {
        backgroundColor: primaryColor,
      },
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: "New Card",
      headerTintColor: primaryTextColor,
      headerStyle: {
        backgroundColor: primaryColor,
      },
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: primaryTextColor,
      headerStyle: {
        backgroundColor: primaryColor,
      },
    }
  },
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