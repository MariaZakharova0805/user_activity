import React from 'react'
import { flexRender, getCoreRowModel, getSortedRowModel, SortingState, useReactTable } from '@tanstack/react-table'
import { columns } from "./events-table-columns"
import { useEventsStore } from 'entities/events'
import { Table, TableBody, TableHead } from '@mui/material';
import { StyledTableCell, StyledTableRow } from './events-table-styles'
import { EventsTableSorting } from './events-table-sorting';

export const EventsTable = () => {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const { items } = useEventsStore(state => state);
  const table = useReactTable({
    data: items,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    sortingFns: {
      customSorting: () => 0
    }
  })

  return (
    <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
      <TableHead>
        {table.getHeaderGroups().map(headerGroup => (
          <StyledTableRow key={headerGroup.id}>
            {headerGroup.headers.map(header => {
              return (
                <StyledTableCell key={header.id} colSpan={header.colSpan} sx={{ minWidth: 234 }}>
                  {header.isPlaceholder ? null : (
                  <EventsTableSorting header={header}/>
                  )}
                </StyledTableCell>
              )
            })}
          </StyledTableRow>
        ))}
      </TableHead>
      <TableBody>
        {table
          .getRowModel()
          .rows
          .map(row => {
            return (
              <StyledTableRow key={row.id}>
                {row.getAllCells().map(cell => {
                  return (
                    <StyledTableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </StyledTableCell>
                  )
                })}
              </StyledTableRow>
            )
          })}
      </TableBody>
    </Table>
  )
}
