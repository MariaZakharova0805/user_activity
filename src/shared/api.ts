import axios from 'axios';
import { Constants } from './constants';
import { Dictionary } from '../pages/dictionary/types';
import { Events, FilterData } from '../pages/events/types';

type FetchDictionary = () => Promise<Dictionary[]>
// const url = Constants.BASE_URL;
const urlDictionary = `${Constants.BASE_URL}/dictionary`;

export const fetchDictionary: FetchDictionary = async () => {
  try {
    const response = await axios.get(urlDictionary);
    return response.data
  } catch (err) {
    console.log(err);
    return []
  }
}

export const addDictionaryItem = async ({ key, text }: Dictionary): Promise<boolean> => {
  try {
    axios.post(urlDictionary, { event: key, text })
    return true
  } catch (err) {
    console.log(err);
    return false
  }
}

export const editDictionaryItem = async (newKey: string, newText: string) => {
  try {
    axios.put(urlDictionary, { event: newKey, text: newText })
  } catch (err) {
    console.log(err)
    return false
  }
}

export const deleteDictionaryItem = async (deletedItem: string) => {
  try {
    axios.delete(urlDictionary, { params: { event: deletedItem } })
  } catch (err) {
    console.log(err)
    return false
  }
}


const urlEvents = `${Constants.BASE_URL}/events`;
export const fetchEvents = async ({ fromDate, toDate }: FilterData) => {
  try {
    const response = await axios.get(`${urlEvents}/?fromDate=${fromDate}&toDate=${toDate}`);
    return response.data
  }
  catch (err) {
    console.log(err)
  }
}
