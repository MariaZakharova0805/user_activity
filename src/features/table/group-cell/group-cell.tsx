import { FC, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


type TextCellProps = {
    group?: string

    onSave?: (text: string) => void
    onChange?: (text: string) => void
}

export const GroupCell: FC<TextCellProps> = ({ group }) => {
    const [groupItem, setGroupItem] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setGroupItem(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Группа не выбрана</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={groupItem}
                    label="группа не выбрана"
                    onChange={handleChange}
                >
                    <MenuItem value={"group_1"}>group_1</MenuItem>
                    <MenuItem value={"group_2"}>group_2</MenuItem>
                    <MenuItem value={"group_3"}>group_3</MenuItem>
                    <MenuItem value={"group_0"}>группа не выбрана</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}


