import { ColumnDef, CellContext } from '@tanstack/react-table'
import { DictionaryElement, removeDictionaryItem, updateDictionaryItem, addDictionaryItem } from 'entities/dictionary'
import { RemoveCell, TextCell, sortHeaderCell } from 'features/table'
import { GroupCell } from 'features/table/group-cell'

type Column = ColumnDef<DictionaryElement>
type Cell = (props: CellContext<DictionaryElement, unknown>) => JSX.Element
type GroupCell = ColumnDef<DictionaryElement>

const removeHandler = (dictionaryKey: string) => () => {
  removeDictionaryItem(dictionaryKey)
}
const saveHandler = ({ key, unsaved }: DictionaryElement) => (text: string) => {
  (unsaved ? addDictionaryItem : updateDictionaryItem)({ key, text })
}

const actionCell: Cell = props => (
  <RemoveCell onClick={removeHandler(props.row.original.key)} />
)
const textCell: Cell = ({ row: { original } }) => (
  <TextCell text={original.text} onSave={saveHandler(original)} key={original.key} />
)

const groupCell: Cell = ({ row: { original } }) => (
  <GroupCell group={original.text} key={original.text} />
)

export const columns: Column[] = [
  {
    id: 'key',
    header: sortHeaderCell<DictionaryElement>('Код события'),
    accessorKey: 'key',
    enableSorting: true
  },
  {
    id: 'text',
    header: sortHeaderCell<DictionaryElement>('Описание события'),
    accessorKey: 'text',
    cell: textCell,
    enableSorting: true
  },
  {
    id: 'actions',
    header: '',
    accessorKey: 'key',
    cell: actionCell,
  },
  {
    id: 'unsaved',
    header: 'Группа',
    accessorKey: 'unsaved',
    cell: groupCell,
  }
]
