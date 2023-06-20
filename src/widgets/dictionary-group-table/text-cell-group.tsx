import { FC, useState } from 'react'
import { updateDictionaryGroupItem } from 'entities/dictionary-group'
import { TextField } from '@mui/material'

type TextCellInput = {
    text: string
    newKey: string
}

export const TextCell: FC<TextCellInput> = ({ text, newKey }) => {
    const [value, setValue] = useState(text)
    const saveNewText = (e: { target: { value: any } }) => {
        updateDictionaryGroupItem({ text: e.target.value, key: newKey })
    }

    return (
        <TextField value={value} onChange={(e) => setValue(e.target.value)} onBlur={saveNewText} size="small"/>
    )
}