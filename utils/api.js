import { AsyncStorage } from 'react-native'
import { DECKS_STORAGE_KEY, DEBUG_CLEAR_STORAGE, setDummyData } from './_flashcards'

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(getAllDecks)
}

export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [title]: { key: title, title: title, questions: [] }
  }))
}

export function getDeck(title) {
  return getDecks()
    .then((deck) => deck[title])
}

export function saveCardToDeck({key, cards}) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [key]: { questions: cards }
  }))
}

function getAllDecks(decks) {
  if (DEBUG_CLEAR_STORAGE) {
    console.log("Cleaning up storage")
    AsyncStorage.removeItem(DECKS_STORAGE_KEY)
    decks = null
  }

  if (decks === null && __DEV__) {
    console.log("Populate DB with dummy data")
    return setDummyData()
  } else {
    console.log(JSON.parse(decks))
    return JSON.parse(decks)
  }
}
