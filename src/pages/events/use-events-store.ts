import { create } from "zustand";
import { Events } from "./types";

interface FilterData { fromDate?: string, toDate?: string, userId?:string}
interface UrlParams { fromDate?: string, toDate?: string}

type useEvents = {
  items: Events[],
  filterData:FilterData,
  urlParams:UrlParams,

  setItems: (items: Events[]) => void,
  setFilterData: (filterData: Object) => void,
}

export const useEvents = create<useEvents>(set => ({
  //Добавление данных в таблицу
  items: [],
  setItems: items => set({ items }),

  //Данные инпутов
  filterData: {},
  setFilterData: filterData => set({ filterData }),

  //строка url
  urlParams: Object.fromEntries(new URLSearchParams(window.location.search).entries()),
}));