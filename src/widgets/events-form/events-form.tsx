import React from 'react'
import { Grid, TextField, Button } from '@mui/material'
import { useForm, SubmitHandler } from "react-hook-form"
import { FilterEventsElement, useEventsStore, fetchEventsItems, addFilterParams } from 'entities/events'

export const EventsForm = () => {
  const { filterParams } = useEventsStore(state => state);
  const { register, handleSubmit, watch } = useForm<FilterEventsElement>()

  React.useEffect(() => {
    watch((value) => { addFilterParams(value) });
  }, [watch]);

  const fetchEventsData: SubmitHandler<FilterEventsElement> = () => {
    fetchEventsItems(filterParams)
  };

  return (
    <form onSubmit={handleSubmit(fetchEventsData)}>
      <Grid container columnSpacing={3} alignItems={'center'}>
        <Grid item>
          <TextField {...register("fromDate")} type="date" variant='standard' />
        </Grid>
        <Grid item>
          <TextField {...register("toDate")} type="date" variant='standard' />
        </Grid>
        <Grid item>
          <Button type="submit" variant='outlined'>Выгрузить</Button>
        </Grid>
      </Grid>
    </form>
  )
}
