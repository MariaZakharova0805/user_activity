import { create } from "zustand";
import { Dictionary } from "./types";

type useDictionary = {
  items: Dictionary[],

  setItems: (items: Dictionary[]) => void,
  addItem: (item: Dictionary) => void,
  removeItem: (key: string) => void,
  updateItem: (item: Dictionary) => void,
}

export const useDictionaryStore = create<useDictionary>(set => ({
  items: [],
  setItems: items => set({ items }),
  addItem: item => set(({ items }) => ({ items: [...items, item] })),
  removeItem: key => set(({ items }) => {
    return { items: items.filter(item => item.key != key) }
  }),
  updateItem: item => set(({ items }) => {
    return { items: items.map(current => current.key == item.key ? item : current) }
  })
}));
