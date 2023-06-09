import { shallow } from 'zustand/shallow'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { useDictionaryStore, selectorDictionaryItems } from 'entities/dictionary'
import { columns } from './dictionary-table-columns'
import styles from './dictionary-table-styles.module.css'

export const DictionaryTable = () => {
  const dictionaryItems = useDictionaryStore(selectorDictionaryItems, shallow)

  const table = useReactTable({
    data: dictionaryItems,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getRowId: ({ key }) => key,
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
