import { create } from 'zustand';
import { fetch, remove, update, add } from './dictionary-group.api';
import { DictionaryGroupElement, newGroupItem } from './dictionary-group.model'

type DictionaryGroupProps = {
    isFetching: boolean,
    items: DictionaryGroupElement[],
}

export const useDictionaryGroupStore = create<DictionaryGroupProps>(() => ({
    isFetching: false,
    items: [],
}));

export const updateDictionaryGroupItem = async (item: DictionaryGroupElement) => {
    if (await update(item))
    useDictionaryGroupStore.setState(({ items }) => ({ items: items.map(current => current.key == item.key ? item : current) }))
  }

export const addDictionaryGroupItem = async (item: DictionaryGroupElement) => {
    if (await add(item)) {
        useDictionaryGroupStore.setState(({ items }) => ({ items: [...items, item] }))
        return true
    }
    return false
}

export const removeDictionaryGroupItem = async (key:string) => {
    if (await remove(key))
    useDictionaryGroupStore.setState(({ items }) => ({ items: items.filter(item => item.key != key) }))
  }


const fetchDictionaryGroupItems = async () => {
    useDictionaryGroupStore.setState({ isFetching: true })
    fetch().then(items => {
        const sortedItems = [...items].sort((a, b) => a.key.localeCompare(b.key))
        useDictionaryGroupStore.setState({ isFetching: true, items: sortedItems })
    })
}
fetchDictionaryGroupItems()