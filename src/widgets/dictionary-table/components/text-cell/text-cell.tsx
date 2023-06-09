import { useState, FC, ChangeEvent } from 'react'
import { updateDictionaryItem } from 'entities/dictionary'

type TextCellProps = {
  dictionaryKey: string
  text: string
}

export const TextCell: FC<TextCellProps> = ({ dictionaryKey, text: currentText }) => {
  const [text, setText] = useState<string>(currentText)
  const [editable, setEditable] = useState<boolean>(false)

  const changeTextHandler = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setText(value)
  }
  const blurHandler = () => {
    setEditable(false)
    updateDictionaryItem({ key: dictionaryKey, text })
  }

  return (
    <div onClick={() => setEditable(true) }>
      {
        editable ? (
          <input value={text} onChange={ changeTextHandler } onBlur={ blurHandler } />
        ) : text
      }
    </div>
  )
}
