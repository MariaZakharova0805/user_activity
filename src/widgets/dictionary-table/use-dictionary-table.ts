import { useMemo, useState } from 'react'
import { SortingState } from '@tanstack/react-table'
import { DictionaryElement, useDictionaryStore } from 'entities/dictionary'

export enum Direct { DESC=-1, ASC=1 }
export type SortingColumn = 'key' | 'text'

const sortDictionaryItems = (items:DictionaryElement[], column:SortingColumn, direct:Direct): DictionaryElement[] => {
  return [...items].sort((rowA, rowB) => {
    return (
      rowA.unregistered === rowB.unregistered ? (
        rowA.unsaved === rowB.unsaved ? (
          rowA[column] && rowB[column] ? (
            rowA[column].localeCompare(rowB[column]) * direct
          ) : rowA[column] ? direct : direct * -1
        ) : rowA.unsaved ? direct : direct*-1
      ) : rowA.unregistered ? direct : direct*-1
    )
  })
}

export const useDictionaryTable = () => {
  const [sortState, setSortState] = useState<SortingState>([])
  const items = useDictionaryStore(store => store.items)

  return useMemo(() => {
    const { id, desc } = sortState[0] || {}
    return {
      sortState,
      items: id ? sortDictionaryItems(items, id as SortingColumn, desc ? Direct.DESC : Direct.ASC) : items,
  
      setSortState
    }
  }, [items, sortState, setSortState])
}
