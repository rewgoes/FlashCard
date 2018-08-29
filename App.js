import React from 'react';
import { View } from 'react-native';
import AddDeck from './components/AddDeck';
import DeckList from './components/DeckList';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <DeckList />
      </View>
    );
  }
}