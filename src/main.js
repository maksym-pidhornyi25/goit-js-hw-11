import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = form.querySelector('input[name="search-text"]');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = input.value.trim();

  if (query === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      const hits = data.hits ?? [];

      if (!Array.isArray(hits) || hits.length === 0) {
        iziToast.info({
          title: 'No results',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      createGallery(hits);

      iziToast.success({
        title: 'Done',
        message: `Found ${hits.length} images`,
        position: 'topRight',
      });
    })
    .catch(err => {
      console.error(err);
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong while fetching images.',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });
});
