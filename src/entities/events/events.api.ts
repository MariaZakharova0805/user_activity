import axios from 'axios';
import { FilterEventsElement } from './events.model';
import { BASE_URL } from 'shared/constants';

const urlEvents = `${BASE_URL}/events`;

export const fetch = async (filterParams: FilterEventsElement) => {
  try {
    const response = await axios.get(`${urlEvents}/?fromDate=${filterParams.fromDate}&toDate=${filterParams.toDate}`);
    return response.data
  }
  catch (err) {
    console.log(err)
  }
  return []
}
