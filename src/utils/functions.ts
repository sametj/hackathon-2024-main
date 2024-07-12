import { MAX_CACHE_SIZE } from "./constants";
import { DataItem } from "./functions.types";

const cachedResults: { [searchTerm: string]: DataItem[] } = {};

export function filterDataByName<T extends DataItem>(
  data: T[],
  searchTerm: string
) {
  if (searchTerm === "") {
    return data;
  }

  if (searchTerm in cachedResults) {
    return cachedResults[searchTerm] as T[];
  }

  const filteredData = data.filter((data) => {
    const name = data.name.toLowerCase();
    return name.includes(searchTerm.toLowerCase());
  });

  cachedResults[searchTerm] = filteredData;

  const cacheKeys = Object.keys(cachedResults);
  if (cacheKeys.length > MAX_CACHE_SIZE) {
    const oldestKey = cacheKeys[0];
    delete cachedResults[oldestKey];
  }

  return filteredData;
}
