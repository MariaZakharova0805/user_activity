import { DictionaryElement } from './dictionary.model'
import { create } from 'zustand';
import { fetch, remove, update, add } from './dictionary.api';

type DictionaryProps = {
  isFetching: boolean,
  items: DictionaryElement[]
}

export const useDictionaryStore = create<DictionaryProps>(() => ({
  isFetching: false,
  items: []
}));

export const selectorDictionaryItems = ({ items }: DictionaryProps) => items

export const addDictionaryItem = async (item: DictionaryElement) => {
  if (await add(item)) {
    useDictionaryStore.setState(({ items }) => ({ items: [...items, item ]}))
    return true
  }
  return false
}

export const updateDictionaryItem = async (item: DictionaryElement) => {
  if (await update(item))
    useDictionaryStore.setState(({ items }) => ({ items: items.map(current => current.key == item.key ? item : current) }))
}

export const removeDictionaryItem = async (key:string) => {
  if (await remove(key))
    useDictionaryStore.setState(({ items }) => ({ items: items.filter(item => item.key != key) }))
}

const fetchDictionaryItems = async () => {
  useDictionaryStore.setState({ isFetching: true })
  fetch().then(items => {
    const sortedItems = [...items].sort((a, b) => a.key.localeCompare(b.key))
    useDictionaryStore.setState({ isFetching: true, items: sortedItems })
  })
}

fetchDictionaryItems()
