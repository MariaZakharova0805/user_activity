import React from 'react'
import { flexRender, getCoreRowModel, getSortedRowModel, SortingState, useReactTable } from '@tanstack/react-table'
import { columns } from "./events-table-columns"
import { useEventsStore } from 'entities/events'
import { Table, TableHead, TableBody, TableRow, Paper, TableContainer } from '@mui/material';
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
    <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
      <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 650 }}>
        <TableHead sx={{ fontSize: '20px' }}>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header: any) => {
                return (
                  <StyledTableCell key={header.id} colSpan={header.colSpan} sx={{ minWidth: 234 }}>
                    {header.isPlaceholder ? null : (
                      <EventsTableSorting header={header} />
                    )}
                  </StyledTableCell>
                )
              })}
            </TableRow>
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
    </TableContainer>
  )
}
