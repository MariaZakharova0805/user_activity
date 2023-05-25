import { SearchForm } from "./search-form";
import { Table } from "../../widgets/table";
import { useDictionaryStore } from "./use-dictionary-store";

const columns = [
  { Header: "Событие", accessor: "key" },
  { Header: "Текст события", accessor: "text" },
  { Header: "Управление", accessor: "del" }
]

export const Dictionary = () => {
  const data = useDictionaryStore(state => state.items);

  return (
    <div className="table">
      <SearchForm />
      <Table data={data} columns={columns}/>
    </div>
  );
}
