import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { useDictionaryTable } from './use-dictionary-table'
import { columns } from './dictionary-table-columns'
import styles from './dictionary-table-styles.module.css'
import { DictionaryElement } from 'entities/dictionary'
import { Table, TableBody, TableHead } from '@mui/material';
import { StyledTableCell, StyledTableRow } from './dictionary-table-styles'

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
    <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table" className={styles.dictionaryTable}>
      <TableHead>
        {table.getHeaderGroups().map(headerGroup => (
          <StyledTableRow key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <StyledTableCell className={header.column.columnDef.meta?.className} key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
              </StyledTableCell>
            ))}
          </StyledTableRow>
        ))}
      </TableHead>
      <TableBody>
        {table.getRowModel().rows.map(row => (
          <StyledTableRow key={row.id}>
            {row.getVisibleCells().map(cell => (
              <StyledTableCell className={cell.column.columnDef.meta?.className} key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </StyledTableCell>
            ))}
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  )
}
