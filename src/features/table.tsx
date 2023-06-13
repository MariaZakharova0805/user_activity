import { FC } from 'react'
import { useTable, useSortBy } from 'react-table'
import TextInput from 'features/text-input'
import DeleteEventBtn from 'features/delete-event-btn'

interface Column { Header: string, accessor: string }

type TableProps = {
  data: any,
  columns: Column[],
}

export const Table: FC<TableProps> = ({ data, columns }) => {

  //react-table
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <table {...getTableProps()} className="table">
      <thead >
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => {
              if (column.id === "del") {
                return <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <div className="table_headers">{column.render("Header")}</div>
                </th>
              } else {
                return <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <div className="table_headers">{column.render("Header")}
                    <SortingHeader column={column} /></div>
                </th>
              }
            })}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()} className="table__row">
              {row.cells.map(cell => {
                if (cell.column.id === 'text') {
                  //Колонка с ячейкой-инпутом с функцией изменение и сохранения
                  return <td {...cell.getCellProps()}>
                    <TextInput item={cell} />
                  </td>
                } else if (cell.column.id === 'del') {
                  //Колонка с ячейкой с кнопкой удалить
                  return <td {...cell.getCellProps()}>
                    <DeleteEventBtn item={cell} />
                  </td>
                }
                else {
                  //Стандартная ячейка с неизменяемыми значениями events
                  return <td {...cell.getCellProps()}> {cell.render("Cell")}</td>
                }
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
