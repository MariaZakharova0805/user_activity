import React, { FC } from 'react';
import { Box, Paper, InputLabel, MenuItem, FormControl, SelectChangeEvent, Select } from '@mui/material';
import { selectListItem } from 'entities/select-details/select-details.model';

type SelectParamsProps = {
  header: string,
  paramsList: selectListItem[],
}

export const SelectParams: FC<SelectParamsProps> = ({ header, paramsList }) => {
  const [non, setNon] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setNon(event.target.value as string);
  };

  return (
    <Box sx={{ minidth: 120, mt: 2 }}>
      <FormControl sx={{ mx: 1, width: "210px" }}>
        <InputLabel id="outlined-basic"><Paper elevation={0} sx={{ pr: 1 }}>{header}</Paper></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={non}
          label="Нет"
          onChange={handleChange}
          variant="outlined"
        >
          {paramsList.map((item: selectListItem) => {
            return <MenuItem key={item.id} value={item.value}>{item.name}</MenuItem>
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
