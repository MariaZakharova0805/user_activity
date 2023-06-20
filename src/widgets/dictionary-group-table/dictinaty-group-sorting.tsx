import { FC } from 'react'
import { flexRender } from '@tanstack/react-table'

type EventsTableSortingProps = { header: any }

export const DictionaryGroupTableSorting: FC<EventsTableSortingProps> = ({ header }) => {

 return (
        <div
            {...{
                className: header.column.getCanSort()
                    ? 'cursor-pointer select-none'
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
    )

}


