import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDictionaryStore } from "./use-dictionary-store";
import { addDictionaryItem, fetchDictionary } from "../../shared/api";
import { Button } from "../../shared/ui/button/button";

export const SearchForm: FC = () => {
  const { setItems, addItem } = useDictionaryStore(state => state);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    (async () => {
      const dictionary = await fetchDictionary();
      setItems(dictionary);
    })()
  }, []);

  const onSubmit = (item: any) => {
    if (item.key.length) {
      addDictionaryItem(item)
      addItem(item)
    } else {
      console.log('введите значение')
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="searchForm">
      <input placeholder="название события" {...register("key")} className="textInt_input" />
      <input placeholder="текст события" {...register("text")} className="textInt_input" />
      <Button type="submit">Добавить</Button>
    </form>
  );
};
