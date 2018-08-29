import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { getDecks } from '../utils/api'
import { isEmpty } from '../utils/helpers'

export default class AddDeck extends Component {
  state = {
    decks: {},
  }
  componentDidMount() {
    getDecks()
      .then((decks) => this.setState(() => ({ decks })))
  }
  render() {
    const { decks } = this.state
    const deckList = Object.values(decks)

    if (isEmpty(decks)) {
      return (<View style={{ flex: 1 }}></View>)
    } else {
      return (
        <View style={{ flex: 1 }}>
          <FlatList
            data={deckList}
            renderItem={({ item }) =>
              <Text>{item.title}</Text>
            }
          />
        </View>
      )
    }
  }
}