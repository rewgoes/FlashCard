import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { getDecks } from '../utils/api'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'
import { isEmpty } from '../utils/helpers'
import { AppLoading } from 'expo'

class DeckList extends Component {
  state = {
    ready: false,
  }

  componentDidMount() {
    const { dispatch } = this.props

    getDecks()
      .then((decks) => dispatch(receiveDecks(decks)))
      .then(() => this.setState(() => ({ ready: true })))
  }

  render() {
    const { decks } = this.props
    const { ready } = this.state
    const deckList = Object.values(decks)

    if (ready === false) {
      return <AppLoading />
    }

    if (isEmpty(decks)) {
      return (<View style={{flex: 1}}/>)
    }
    
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

function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(
  mapStateToProps,
)(DeckList)