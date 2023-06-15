import { EventsElement } from './events.model'
import { create } from "zustand";
import { fetch } from './events.api';

interface FilterParams { fromDate?: string, toDate?: string }

type EventsProps = {
  items: EventsElement[],
  filterParams: FilterParams,
}

export const useEventsStore = create<EventsProps>(set => ({
  isFetching: false,
  items: [],
  filterParams: {},
}));

export const addFilterParams = (newParams: FilterParams) => {
  useEventsStore.setState({ filterParams: newParams })
}

export const fetchEventsItems = async (filterParams: FilterParams) => {
  fetch(filterParams).then(items => {
    useEventsStore.setState({ items: items })
  })
}
