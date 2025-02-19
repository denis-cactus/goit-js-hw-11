import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast';
const API_KEY = '48901919-31fb8722d9302fb6f0fb2505f';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = query => {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      return response.data.hits;
    })
    .catch(error => {
      console.error(error);
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return [];
    });
};
