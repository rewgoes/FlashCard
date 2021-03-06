import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { primaryColor, primaryLightColor, primaryDarkColor, primaryTextColor, gray, white } from './../utils/colors'
import { connect } from 'react-redux'
import { saveDeckTitle } from '../utils/api'
import { addDeck } from '../actions'

function SubmitBtn({ onPress, isDisabled }) {
  return (
    <TouchableOpacity
      disabled={isDisabled}
      style={[
        Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn,
        isDisabled ? { backgroundColor: primaryLightColor } : { backgroundColor: primaryDarkColor }
      ]}
      onPress={onPress}>
      <Text style={styles.submitBtnText}>SUBMIT</Text>
    </TouchableOpacity>
  )
}

class AddDeck extends Component {
  state = {
    deckName: "",
  }

  submit = () => {
    const deckTitle = this.state.deckName

    const deck = {
      key: deckTitle,
      title: deckTitle,
      questions: []
    }

    this.props.dispatch(addDeck({
      [deckTitle]: deck
    }))

    this.props.navigation.pop()
    this.props.navigation.navigate(
      'DeckDetail',
      { deckKey: deckTitle }
    )

    saveDeckTitle(deckTitle)
  }

  render() {
    const { deckName } = this.state

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text>What's the title of your deck?</Text>
        <TextInput style={styles.input}
          underlineColorAndroid={primaryColor}
          selectionColor={primaryLightColor}
          placeholder={"Deck Title"}
          value={deckName}
          onChangeText={
            (deckName) => this.setState({ deckName })
          } />
        <SubmitBtn onPress={this.submit} isDisabled={!deckName} />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
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
    borderColor: gray
  },
  submitBtnText: {
    color: primaryTextColor,
    fontSize: 22,
    textAlign: 'center',
  },
  iosSubmitBtn: {
    marginTop: 50,
    backgroundColor: gray,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
  AndroidSubmitBtn: {
    marginTop: 50,
    backgroundColor: gray,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default connect()(AddDeck)