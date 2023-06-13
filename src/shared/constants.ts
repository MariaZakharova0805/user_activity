export const BASE_URL = import.meta.env.MODE === 'production' ? "http://git-events-bot.ru:8082" : 'http://localhost:3030';
export const DICTIONARY_PATH = "dictionary";
export const EVENTS_PATH = "events";

console.log({ BASE_URL })
