import { AsyncStorage } from 'react-native'
import { DECKS_STORAGE_KEY, setDummyData } from './_flashcards'

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(getAllDecks)
}

export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [title]: { title: title, questions: [] }
  }))
}

export function getDeck(title) {
  return getDecks()
    .then((deck) => deck[title])
}

export function addCardToDeck(title, card) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [title]: { questions: card }
  }))
}

function getAllDecks(decks) {
  if (decks === null && __DEV__) {
    // Set dummy data in case storage is empty
    return setDummyData()
  } else {
    return JSON.parse(decks)
  }
}
