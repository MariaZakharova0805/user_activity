import { ColumnDef } from '@tanstack/react-table'
import { DictionaryElement } from 'entities/dictionary'
import { TextCell, RemoveCell } from './components'
import styles from './dictionary-table-styles.module.css'

type Column = ColumnDef<DictionaryElement>

export const columns: Column[] = [
  {
    header: 'Ключ события',
    accessorKey: 'key',
    meta: {
      className: styles.dictionaryTableKey
    }
  },
  {
    header: 'Описание события',
    accessorKey: 'text',
    cell: ({ row: { original: { key, text } } }) => (
      <TextCell dictionaryKey={ key } text={ text } key={ key } />
    ),
    meta: {
      className: styles.dictionaryTableText
    }
  },
  {
    id: 'actions',
    header: '',
    accessorKey: 'key',
    cell: ({ row: { original: { key } } }) => (<RemoveCell dictionaryKey={key} />),
    meta: {
      className: styles.dictionaryTableDel
    }
  }
]
