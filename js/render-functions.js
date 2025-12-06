import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

/**

* @param {Array} images
 */
export function createGallery(images) {
  if (!Array.isArray(images) || images.length === 0) return;

  const markup = images
    .map(
      img => `
    <li class="gallery-item">
      <a class="gallery-link" href="${img.largeImageURL}">
        <img
          class="gallery-image"
          src="${img.webformatURL}"
          alt="${img.tags}"
          loading="lazy"
        />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes:</b> ${img.likes}</p>
        <p class="info-item"><b>Views:</b> ${img.views}</p>
        <p class="info-item"><b>Comments:</b> ${img.comments}</p>
        <p class="info-item"><b>Downloads:</b> ${img.downloads}</p>
      </div>
    </li>`
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  if (galleryEl) {
    galleryEl.innerHTML = '';
  }
}

export function showLoader() {
  if (!loaderEl) return;
  loaderEl.classList.add('is-visible');
}

export function hideLoader() {
  if (!loaderEl) return;
  loaderEl.classList.remove('is-visible');
}

export { lightbox };
