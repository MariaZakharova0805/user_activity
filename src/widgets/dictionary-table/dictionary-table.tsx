import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { useDictionaryTable } from './use-dictionary-table'
import { columns } from './dictionary-table-columns'
import styles from './dictionary-table-styles.module.css'
import { DictionaryElement } from 'entities/dictionary'

export const DictionaryTable = () => {
  const { items, sortState, setSortState } = useDictionaryTable()

  const table = useReactTable<DictionaryElement>({
    data: items,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getRowId: ({ key }) => key,
    state: { sorting: sortState },
    onSortingChange: setSortState,
    // Кастомная сортировка не завелась, пришлось писать костыль 
    sortingFns: {
      customSorting: () => 0
    }
  })

  return (
    <table className={ styles.dictionaryTable }>
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th className={header.column.columnDef.meta?.className} key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td className={cell.column.columnDef.meta?.className } key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
