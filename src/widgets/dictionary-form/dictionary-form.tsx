import { Paper, Grid, TextField, Button } from '@mui/material'
import { useDictionaryForm } from './use-dictionary-form'

export const DictionaryForm = () => {
  const { key, text, err, keyHandler, textHandler, addHandler } = useDictionaryForm()
  return (
    <Paper sx={{ paddingX:2, paddingY:1, marginY: 1 }}>
      <Grid container columnSpacing={3} alignItems={'center'}>
        <Grid item>
          <TextField label='Код события' variant='standard' value={key} onChange={keyHandler} />
        </Grid>
        <Grid item>
          <TextField label='Описание события' variant='standard' value={text} onChange={textHandler} />
        </Grid>
        <Grid item>
          <Button disabled={err} variant='outlined' onClick={addHandler}>Добавить</Button>
        </Grid>
      </Grid>
    </Paper>
  )
}