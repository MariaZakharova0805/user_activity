import { ColumnDef, CellContext } from '@tanstack/react-table'
import { DictionaryElement, removeDictionaryItem, updateDictionaryItem, addDictionaryItem } from 'entities/dictionary'
import { RemoveCell, TextCell, sortHeaderCell } from 'features/table'
import styles from './dictionary-table-styles.module.css'

type Column = ColumnDef<DictionaryElement>
type Cell = (props: CellContext<DictionaryElement, unknown>) => JSX.Element

const removeHandler = (dictionaryKey: string) => () => {
  removeDictionaryItem(dictionaryKey)
}
const saveHandler = ({ key, unsaved }: DictionaryElement) => (text: string) => {
  (unsaved ? addDictionaryItem : updateDictionaryItem)({ key, text })
}

const actionCell:Cell = props => (
  <RemoveCell onClick={ removeHandler(props.row.original.key) } />
)
const textCell:Cell = ({ row: { original } }) => (
  <TextCell text={ original.text } onSave={ saveHandler(original) } key={ original.key } />
)

export const columns: Column[] = [
  {
    id: 'key',
    header: sortHeaderCell<DictionaryElement>('Код события'),
    accessorKey: 'key',
    meta: { className: styles.key },
    enableSorting: true
    
  },
  {
    id: 'text',
    header: sortHeaderCell<DictionaryElement>('Описание события'),
    accessorKey: 'text',
    cell: textCell,
    meta: { className: styles.text },
    enableSorting: true
  },
  {
    id: 'actions',
    header: '',
    accessorKey: 'key',
    cell: actionCell,
    meta: {
      className: styles.del
    }
  }
]
