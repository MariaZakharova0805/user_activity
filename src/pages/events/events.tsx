import EventsSearchForm from './events-search-form'
import { Table } from 'features/table'
import { useEvents } from './use-events-store'

const columns = [
  { Header: 'Событие', accessor: 'event' },
  { Header: 'Дата', accessor: 'lastDate' },
  { Header: 'Кол-во событий', accessor: 'cnt' },
]

export const Events = () => {
  const data = useEvents((state) => state.items);

  return (
    <div className='table'>
      <EventsSearchForm />
      <Table data={data} columns={columns} />
    </div>
  );
};
