import { Container, Paper } from '@mui/material'
import { DictionaryTable } from 'widgets/dictionary-table'
import { DictionaryForm } from 'widgets/dictionary-form'

export const DictionaryPage = () => {
  return (
    <>
      <Paper sx={{ paddingX:2, paddingY:1, marginY: 1 }}>
        <DictionaryForm />
      </Paper>
      <DictionaryTable />
    </>
  )
}
