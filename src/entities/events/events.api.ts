import axios from 'axios';
import { EventsElement } from './events.model';
import { BASE_URL } from 'shared/constants';

const urlEvents = `${BASE_URL}/events`;

export const fetch = async (filterData: EventsElement) => {
  try {
    const response = await axios.get(`${urlEvents}/?fromDate=${filterData.fromDate}&toDate=${filterData.toDate}`);
    return response.data
  }
  catch (err) {
    console.log(err)
  }
  return []
}
