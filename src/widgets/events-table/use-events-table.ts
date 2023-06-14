import { useMemo, useState } from 'react'
import { SortingState } from '@tanstack/react-table'
import {EventsElement, useEventsStore } from 'entities/events'

export enum Direct { DESC=-1, ASC=1 }
export type SortingColumn = 'event' | 'lastDate'| 'cnt'

const sortDictionaryItems = (items:EventsElement[], column:SortingColumn, direct:Direct): EventsElement[] => {
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
  const items = useEventsStore(store => store.items)

  return useMemo(() => {
    const { id, desc } = sortState[0] || {}
    return {
      sortState,
      items: id ? sortDictionaryItems(items, id as SortingColumn, desc ? Direct.DESC : Direct.ASC) : items,
  
      setSortState
    }
  }, [items, sortState, setSortState])
}
