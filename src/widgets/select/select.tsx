import React, { FC } from 'react';
import { Box, Paper, InputLabel, MenuItem, FormControl, SelectChangeEvent, Button } from '@mui/material';
import { useForm } from "react-hook-form";
import { useSelectStore } from 'entities/select/select.store';
import { SelectItem } from 'features/select/select-item';
import c from './select-styles.module.css'

interface IFormValues {
  Details: string;
  Events: string;
  Parametrs: string;
  Indicators: string;
}
export const SelectParams = () => {
  const { headerDetails, listDetails,
    headerEvents, listEvents,
    headerParametrs, listParametrs,
    headerIndicators, listIndicators } = useSelectStore(state => state);

  const { register, handleSubmit } = useForm<IFormValues>();
  const showData = (data: IFormValues) => {
    console.log(data);
  };

  return (
    <Box sx={{ width: 120, m: 2 }}>
      <form onSubmit={handleSubmit(showData)}>
        <div className={c.form}>
        <SelectItem label="Details" {...register("Details")} header={headerDetails} itemsList={listDetails}/>
        <SelectItem label="Events" {...register("Events")} header={headerEvents} itemsList={listEvents} />
        <SelectItem label="Parametrs" {...register("Parametrs")} header={headerParametrs} itemsList={listParametrs} />
        <SelectItem label="Indicators" {...register("Indicators")} header={headerIndicators} itemsList={listIndicators} />
        </div>
        <Button type="submit" sx={{ width: 150, my: 1 }} variant='outlined'>Сформировать</Button>
      </form>
      <Button sx={{ width: 100, my: 1 }} variant='outlined'>Скачать</Button>
    </Box>
  );
}
