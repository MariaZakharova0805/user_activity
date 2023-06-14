import { ColumnDef } from "@tanstack/react-table"
import { EventsElement } from "entities/events/events.model"
import { sortHeaderCell } from 'features/table'

export const columns = [
  { Header: "Событие", accessor: "event" },
  { Header: "Дата", accessor: "lastDate" },
  { Header: "Кол-во событий", accessor: "cnt" },
]
