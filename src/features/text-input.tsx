import { ChangeEvent, FC, useEffect, useState } from 'react'
import DoneIcon from '@mui/icons-material/Done';
import { editDictionaryItem } from "../shared/api";
import { useDictionaryStore } from '../pages/dictionary/use-dictionary-store';

type TextInputProps = {
  item: any,
}

const TextInput: FC<TextInputProps> = ({ item }) => {

  const { updateItem } = useDictionaryStore(state => state);

  const [cellValue, setCellValue] = useState(item.value);
  const [activeBtn, setActiveBtn] = useState(false);

  useEffect(() => {
    setCellValue(item.value);
  }, [item.value]);

  //Изменение текста события
  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCellValue(e.target.value)
    setActiveBtn(true)
  }

  //Отправка обновленного текста события при нажатии на галочку
  const saveEventChanges = () => {
    updateItem(cellValue)
    editDictionaryItem(item.row.original.key, cellValue)
    setActiveBtn(false)
  }

  return (
    <div className='textInt'><input value={cellValue} onChange={(e) => handleValueChange(e)} className="textInt_input" />
      <span className={activeBtn == true ? "textInt_changed" : "textInt_saved"}><DoneIcon onClick={() => saveEventChanges()} /></span>
    </div>
  )
}

export default TextInput