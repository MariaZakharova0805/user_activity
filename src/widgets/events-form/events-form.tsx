import React from 'react'
import { Grid, TextField, Button } from '@mui/material'
import { useForm, SubmitHandler } from "react-hook-form"
import { FilterEventsElement } from 'entities/events'
import { useEventsStore } from 'entities/events'
import { fetchEventsItems } from 'entities/events'
import { fetch } from 'entities/dictionary/dictionary.api'

export const EventsForm = () => {
  const { items, setItems, filterData, setFilterData } = useEventsStore(state => state);
  const { register, handleSubmit, watch } = useForm<FilterEventsElement>()

  React.useEffect(() => {
    const subscription = watch((value) => {
      setFilterData(value)
    });
    return () => subscription.unsubscribe();
  }, [watch, setFilterData]);

  const fetchEventsData: SubmitHandler<FilterEventsElement> = () => {
    fetchEventsItems(filterData)
    // console.log(items)
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


function useEffect(arg0: () => () => any, arg1: any[]) {
  throw new Error('Function not implemented.')
}

function watch(arg0: (value: any) => void) {
  throw new Error('Function not implemented.')
}

function setItems(list: Promise<void>) {
  throw new Error('Function not implemented.')
}
// import { useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { useEvents } from './use-events-store';
// import { fetchEvents } from 'shared/api';
// import { Grid, TextField, Button } from '@mui/material'

// const EventsSearchForm = () => {
//   const { setItems, urlParams, filterData, setFilterData } = useEvents(state => state);
//   const {
//     register,
//     handleSubmit,
//     watch
//   } = useForm({
//     defaultValues: {
//       fromDate: urlParams.fromDate ? urlParams.fromDate : '',
//       toDate: urlParams.toDate ? urlParams.toDate : ''
//     },
//   });

//   useEffect(() => {
//     setFilterData(urlParams)
//   }, [urlParams, setFilterData]);

//   useEffect(() => {
//     const subscription = watch((value) => {
//       setFilterData(value)
//     });
//     return () => subscription.unsubscribe();
//   }, [watch, setFilterData]);

//   const onSubmit = async () => {
//     const events = await fetchEvents(filterData);
//     setItems(events);
//     history.pushState({}, '', `/events/?fromDate=${filterData.fromDate}&toDate=${filterData.toDate}`);
//   };

//   return (
//     <Grid container columnSpacing={3} alignItems={'center'}>
//     <Grid item>
//       <TextField type="date" label='Код события' variant='standard' value={key} onChange={keyHandler} />
//     </Grid>
//     <Grid item>
//       <TextField label='Описание события' variant='standard' value={text} onChange={textHandler} />
//     </Grid>
//     <Grid item>
//       <Button disabled={err} variant='outlined' onClick={addHandler}>Добавить</Button>
//     </Grid>
//   </Grid>

//     // <form onSubmit={handleSubmit(onSubmit)} className="searchForm">
//     //   <input type="date" {...register("fromDate")} className="textInt_input" />
//     //   <input type="date" {...register("toDate")} className="textInt_input" />
//     //   <Button type="submit">Выгрузить</Button>
//     // </form>
//   );
// };

// export default EventsSearchForm;
