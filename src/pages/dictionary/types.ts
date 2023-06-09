export type DictionaryElement = { key: string, text: string }
export type DictionaryProps = {
  isFetching: boolean,
  items: DictionaryElement[]
}

export type DictionaryMethods = {
  addDictionaryItem: (item: DictionaryElement) => void,
  setDictionaryItems: (items: DictionaryElement[]) => void,
  updateDictionaryItem: (item: DictionaryElement) => void,
  removeDictionaryItem: (key: string) => void,
  fetchDictionaryItems: () => Promise<void>,
}

export type DictionaryStore = DictionaryProps & DictionaryMethods
