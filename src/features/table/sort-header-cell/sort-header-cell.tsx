import { HeaderContext } from '@tanstack/react-table'

type Header = <T>(title: string) => (props: HeaderContext<T, unknown>) => JSX.Element

export const sortHeaderCell:Header = title => ({ table, column }) => {
  const { sorting } = table.getState()
  const { desc, id: selectedId } = sorting.find(({ id }) => id === column.id) || {}
  const clickHandler = () => table.setSorting([{ id: column.id, desc: !desc }])

  const arrow = selectedId && (desc ? <>&uarr;</> : <>&darr;</>) || null
  return <span onClick={ clickHandler }>{ title } { arrow }</span>
}
