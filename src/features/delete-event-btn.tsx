import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDictionaryStore } from '../pages/dictionary/use-dictionary-store';
import { deleteDictionaryItem } from '../shared/api';
import { FC } from 'react';

const DeleteEventBtn: FC<{ item: any }>  = ({ item }) => {
  const { removeItem } = useDictionaryStore(state => state);

  const removeEvent = (item: { row: { values: { key: string; }; }; }) => {
    deleteDictionaryItem(item.row.values.key)
    removeItem(item.row.values.key)
  }

  return (
    <span className="table_icon">
      <DeleteForeverIcon className="table_icon" onClick={() => removeEvent(item)} />
    </span>
  )
}
export default DeleteEventBtn