import { EventsElement } from './events.model'
import { create } from "zustand";
import { fetch } from './events.api';

interface FilterData { fromDate?: string, toDate?: string }

type EventsProps = {
  isFetching: boolean,
  items: EventsElement[],
  setItems: (items: EventsElement[]) => void,
  filterData: FilterData,
  setFilterData: (filterData: FilterData) => void,
}

export const useEventsStore = create<EventsProps>(set => ({
  isFetching: false,
  items: [],
  setItems: items => set({ items }),
  filterData: {},
  setFilterData: filterData => set({ filterData }),
}));


export const fetchEventsItems = async (filterData: FilterData) => {
  fetch(filterData).then(items => {
    useEventsStore.setState({ items: items })
  })
}
// далее вызывается в events-form.tsx при нажатии submitButton

