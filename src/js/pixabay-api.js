import axios from 'axios';

const API_KEY = '53582990-021f86ccd386d56203414afea';

const BASE_URL = 'https://pixabay.com/api/';

const defaultParams = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 40,
};

/**
 * @param {string} query
 * @returns {Promise<Object>} response.data
 */
export async function getImagesByQuery(query) {
  if (typeof query !== 'string') {
    throw new Error('Query must be a string');
  }

  const params = { ...defaultParams, q: query.trim() };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
