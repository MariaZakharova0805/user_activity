import '@tanstack/react-table'

declare module '@tanstack/react-table' {
  interface ColumnMeta {
    className?: string
  }
}

declare module '@tanstack/table-core' {
  interface SortingFns {
    customSorting: SortingFn<unknown>
  }
}