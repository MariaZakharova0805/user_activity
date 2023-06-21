import { TextField } from '@mui/material'
import { useState, FC, ChangeEvent } from 'react'

type TextCellProps = {
  text: string

  onSave?: (text: string) => void
  onChange?: (text: string) => void
}

export const TextCell: FC<TextCellProps> = ({ text: currentText, onSave, onChange }) => {
  const [text, setText] = useState<string>(currentText)
  const [editable, setEditable] = useState<boolean>(false)

  const changeTextHandler = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(value)
    else setText(value)
  }

  const blurHandler = () => {
    setEditable(false)
    onSave && onSave(text)
  }

  return (
    <div onClick={() => setEditable(true)}>
      {
        editable ? (
          <TextField value={text} onChange={changeTextHandler} autoFocus onBlur={blurHandler} size="small" sx={{ width: "190px"}} />
        ) : text || <div style={{ color: 'rgba(0,0,0,0.4)' }}><i>Значение не установлено</i></div>
      }
    </div>
  )
}
