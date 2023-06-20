import React from 'react'
import { flexRender, getCoreRowModel, getSortedRowModel, SortingState, useReactTable } from '@tanstack/react-table'
import { columns } from "./dictionary-group-table-columns"
import { useDictionaryGroupStore } from 'entities/dictionary-group'
import { Table, TableHead, TableBody, TableRow, Paper, TableContainer } from '@mui/material';
import { StyledTableCell, StyledTableRow, StyledTableCellSorting } from './dictionary-group-table-styles'
import { DictionaryGroupTableSorting } from './dictinaty-group-sorting';
import { RemoveCell } from 'features/table';
import { removeDictionaryGroupItem } from 'entities/dictionary-group';
import { TextCell } from "./text-cell-group"

export const DictionaryGroupTable = () => {
  const { items } = useDictionaryGroupStore(state => state);
  const table = useReactTable({
    data: items,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    sortingFns: {
      customSorting: () => 0
    }
  })
  return (
    <TableContainer component={Paper} sx={{ maxHeight: '80vh' }}>
      <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 650 }}>
        <TableHead sx={{ fontSize: '20px' }}>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header: any) => {
                if (header.id === 'action') {
                  return (
                    <StyledTableCell key={header.id}>
                      {flexRender(header.column.columnDef.header,
                        header.getContext())}
                    </StyledTableCell>
                  )
                } else {
                  return (
                    <StyledTableCellSorting key={header.id} colSpan={header.colSpan} sx={{ minWidth: 234 }}>
                      <DictionaryGroupTableSorting header={header} />
                    </StyledTableCellSorting>
                  )
                }
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
                    if (cell.column.id === 'action') {
                      return (
                        <StyledTableCell key={cell.id}>
                          <RemoveCell onClick={() => removeDictionaryGroupItem(cell.row.original.key)} />
                        </StyledTableCell>
                      )
                    } else if (cell.column.id === 'text') {
                      return (
                        <StyledTableCell key={cell.id}>
                          <TextCell text={cell.row.original.text} newKey={cell.row.original.key} />
                        </StyledTableCell>
                      )
                    } else
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
