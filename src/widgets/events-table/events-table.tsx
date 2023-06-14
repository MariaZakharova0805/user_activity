import { HTMLAttributes } from "react";
import { useTable, useSortBy  } from "react-table";
import { useEventsStore } from "entities/events";
import { columns } from './events-table-columns';
import { Table, TableHead } from '@mui/material';
import { StyledTableRow, StyledTableCell } from "./events-table-styles";

export const EventsTable = () => {
  const { items } = useEventsStore(state => state);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data: items,
  });

  return (
    <div>
      <Table {...getTableProps()} sx={{ minWidth: 650}} size="medium" aria-label="a dense table">
        <TableHead>
          {headerGroups.map((headerGroup: { getHeaderGroupProps: () => HTMLAttributes<HTMLTableRowElement>; headers: any[]; }) => (
            <StyledTableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <StyledTableCell {...column.getHeaderProps()}>{column.render("Header")}</StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableHead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row: { getRowProps: () => HTMLAttributes<HTMLTableRowElement>; cells: any[]; }) => {
            prepareRow(row);
            return (
              <StyledTableRow {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <StyledTableCell {...cell.getCellProps()}>{cell.render("Cell")}</StyledTableCell>
                  );
                })}
              </StyledTableRow>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
