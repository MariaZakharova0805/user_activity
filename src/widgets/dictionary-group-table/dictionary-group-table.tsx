import React from 'react'
import { flexRender, getCoreRowModel, getSortedRowModel, SortingState, useReactTable } from '@tanstack/react-table'
import { Table, TableHead, TableBody, TableRow, Paper, TableContainer } from '@mui/material';
import { columns } from "./dictionary-group-table-columns"
import { useDictionaryGroupStore } from 'entities/dictionary-group'
import { StyledTableCell, StyledTableRow } from './dictionary-group-table-styles'

export const DictionaryGroupTable = () => {
  const { items } = useDictionaryGroupStore(state => state);
  const [sorting, setSorting] = React.useState<SortingState>([])
  const table = useReactTable({
    data: items,
    columns,
    enableSorting: true,
    sortingFns: {
      customSorting: () => 0
    },
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })
  return (
    <TableContainer component={Paper} sx={{ maxHeight: '80vh' }}>
      <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 650 }}>
        <TableHead sx={{ fontSize: '20px' }}>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header: any) =>
              (<StyledTableCell className={header.column.columnDef.meta?.className} key={header.id} sx={{ width: "220px" }}> 
                {header.isPlaceholder
                  ? null
                  : (
                    <div
                      {...{
                        className: header.column.getCanSort()
                          ? 'cursor-pointer'
                          : '',
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: ' ↑',
                        desc: ' ↓',
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  )}
              </StyledTableCell>))}
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
                  {row.getAllCells().map(cell => (
                    <StyledTableCell className={cell.column.columnDef.meta?.className} key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </StyledTableCell>
                  ))}
                </StyledTableRow>
              )
            })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
