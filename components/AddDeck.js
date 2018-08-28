import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
      onPress={onPress}>
      <Text style={styles.submitBtnText}>SUBMIT</Text>
    </TouchableOpacity>
  )
}

export default class AddDeck extends Component {
  state = {
    deckName: '',
  }

  render() {
    const { deckName } = this.state
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text>What's the title of your deck?</Text>
        <TextInput style={styles.input}
          placeholder={"Deck Title"}
          value={deckName}
          onChangeText={
            (deckName) => this.setState({ deckName })
          } />
        <SubmitBtn />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 300,
    height: 40,
    padding: 5,
    marginTop: 50,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'gray'
  },
  submitBtnText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
  iosSubmitBtn: {
    marginTop: 50,
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
  AndroidSubmitBtn: {
    marginTop: 50,
    backgroundColor: 'gray',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});