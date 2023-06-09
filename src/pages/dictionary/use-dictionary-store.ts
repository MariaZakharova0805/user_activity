import { create } from 'zustand';
import { DictionaryMethods, DictionaryProps, DictionaryStore } from "./types";
import { fetchDictionary } from 'shared/api';

const defaultState: DictionaryProps = {
  isFetching: false,
  items: []
}

export const useDictionaryStore = create<DictionaryStore>(set => ({
  ...defaultState,

  addDictionaryItem: item => set(({ items }) => ({ items: [...items, item] })),
  setDictionaryItems: items => set({ items }),
  updateDictionaryItem: item => set(({ items }) => ({ items: items.map(current => current.key == item.key ? item : current) })),
  removeDictionaryItem: key => set(({ items }) => ({ items: items.filter(item => item.key != key) })),

  fetchDictionaryItems: async () => {
    fetchDictionary().then(data => {
      console.log(data)
      set(() => ({
        isFetching: false
      }))
    })
    set(() => ({ isFetching: true }))
  }
}));

export const selectorDictionaryItems = ({ items }: DictionaryProps) => items

export const {
  addDictionaryItem,
  setDictionaryItems,
  updateDictionaryItem,
  removeDictionaryItem,
  fetchDictionaryItems
}: DictionaryMethods = useDictionaryStore.getState()

// useDictionaryStore.getState().fetchDictionaryItems()
