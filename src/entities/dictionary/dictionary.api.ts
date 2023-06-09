import axios from 'axios';
import { DictionaryElement } from './dictionary.model';
import { BASE_URL } from 'shared/constants';

const urlDictionary = `${BASE_URL}/dictionary`;

export const fetch = async () => {
  try {
    const response = await axios.get<DictionaryElement[]>(urlDictionary);
    return response.data
  } catch (err) {
    console.log(err);
  }
  return []
}

export const add = async ({ key, text }: DictionaryElement) => {
  try {
    axios.post(urlDictionary, { event: key, text })
    return true
  } catch (err) {
    console.log(err);
  }
  return false
}

export const update = async ({ key: event, text }: DictionaryElement) => {
  try {
    axios.put(urlDictionary, { event, text })
    return true
  } catch (err) {
    console.log(err)
  }
  return false
}

export const remove = async (key: string) => {
  try {
    axios.delete(urlDictionary, { params: { event: key } })
    return true
  } catch (err) {
    console.log(err)
  }
  return false
}