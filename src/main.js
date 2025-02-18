import { fetchImages } from './js/pixabay-api.js'; // для запитів
import { renderImages } from './js/render-functions.js'; // для відображення зображень
import iziToast from 'izitoast'; // для повідомлень

import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const query = searchInput.value.trim();
  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term!',
    });
    return;
  }

  gallery.innerHTML = '';
  loader.style.display = 'block';

  fetchImages(query)
    .then(images => {
      if (images.length === 0) {
        iziToast.warning({
          title: '',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          backgroundColor: '#ef4040',
          messageColor: '#fafafb',
          position: 'topRight',
          iconUrl: '../img/error.svg',
        });
      } else {
        renderImages(images);
      }
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong, please try again later!',
      });
      console.error('Error:', error);
    })
    .finally(() => {
      loader.style.display = 'none';
    });
});
