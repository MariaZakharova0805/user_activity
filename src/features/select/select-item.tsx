import React from 'react';
import { UseFormRegister } from "react-hook-form";
import { selectListItem } from 'entities/select';
import c from "./select-item-styles.module.css"
import { MenuItem,InputLabel ,Select } from '@mui/material';

type SelectItemProps = {
  label: string;
  header: string;
  itemsList: selectListItem[];
}

interface IFormValues {
  Details: string;
  Events: string;
  Parametrs: string;
  Indicators: string;
}

export const SelectItem = React.forwardRef<HTMLSelectElement, SelectItemProps & ReturnType<UseFormRegister<IFormValues>>
>(({ onChange, name, header, itemsList }, ref) => (
  <>
    <label className={c.label}>{header}</label>
    <select name={name} ref={ref} onChange={onChange} className={c.select}>
      {itemsList.map((item: any) => {
        return <option value={item.value} key={item.id} disabled={item.disabled} className={c.option}>{item.name}</option >
      })}
    </select>
  </>
));