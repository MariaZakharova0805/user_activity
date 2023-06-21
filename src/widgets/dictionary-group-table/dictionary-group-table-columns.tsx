import { ColumnDef, CellContext } from '@tanstack/react-table'
import { DictionaryGroupElement, removeDictionaryGroupItem, updateDictionaryGroupItem, addDictionaryGroupItem } from 'entities/dictionary-group'
import { RemoveCell, TextCell } from 'features/table'

type Column = ColumnDef<DictionaryGroupElement>
type Cell = (props: CellContext<DictionaryGroupElement, unknown>) => JSX.Element

const removeHandler = (dictionaryKey: string) => () => {
  removeDictionaryGroupItem(dictionaryKey)
}
const saveHandler = ({ key, unsaved }: DictionaryGroupElement) => (text: string) => {
  (unsaved ? addDictionaryGroupItem : updateDictionaryGroupItem)({ key, text })
}

const actionCell: Cell = props => (
  <RemoveCell onClick={removeHandler(props.row.original.key)} />
)
const textCell: Cell = ({ row: { original } }) => (
  <TextCell text={original.text} onSave={saveHandler(original)} key={original.key} />
)

export const columns: Column[] = [
  { id: "key", header: "Ключ", accessorKey: "key", enableSorting: true },
  { id: 'text', header: "Описание", accessorKey: "text", cell: textCell, enableSorting: true },
  { id: 'actions', header: "Управление", accessorKey: "action", cell: actionCell, enableSorting: false },
]