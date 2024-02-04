import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


const formEl = document.querySelector('.form-search');
const imgContainer = document.querySelector('.gallery');
const loaderContainer = document.querySelector('.loader-container');

// Ховаємо лоадер
loaderContainer.style.display = 'none';

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
     e.preventDefault();
    const query = e.target.elements.text.value;
        
    if (query === '') {
        return
    };
    // Очищуємо контейнер, показуємо лоадер
    imgContainer.innerHTML = '';
    loaderContainer.style.display = 'flex';

    // Створюємо галерею
    getPictures(query)
        .then(function ({ hits}) {
                if (hits.length>0) {
                    const markup = hits.map(imgTemplate).join('');
                    imgContainer.innerHTML = markup;

                    // модульне вікно з бібліотеки   
                    let gallery = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt', showCounter: false });
                    gallery.refresh();
                } else {
                    errorShow();
                }
        })
        .catch(function (error) { 
            errorShow(); 
        })
        .finally(function () {
        // очищуємо форму, ховаємо лоадер
        formEl.reset();
        loaderContainer.style.display = 'none';
    })
}

// Запит на сервер pixabay для отримання картинок
function getPictures(searchText) {
    const BASE_URL = 'https://pixabay.com/api';
    const API_KEY = '/?key=42190673-143cbde4cd6a94de75e31d0a4';
    const SEARCH_PARAMS = `&q=${searchText}`;
    const PARAMS = '&image_type=photo&orientation=horizontal&safesearch=true';
    
    // https://pixabay.com/api/?key=42190673-143cbde4cd6a94de75e31d0a4&q=yellow+flowers&image_type=photo

    const url = BASE_URL + API_KEY + SEARCH_PARAMS + PARAMS;
    return fetch(url).then(res => res.json());
}

// Формуємо посилання на картинку з інформацією про неї
function imgTemplate({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) {
  return ` 
  <a href="${largeImageURL}" class="gallery-link">
     <figure>
      <img src="${webformatURL}" alt="${tags}" class="gallery-image">
      <figcaption class="gallery-figcaption">
        <div class="image-item">Likes <span class="image-elem">${likes}</span></div>
        <div class="image-item">Views <span class="image-elem">${views}</span></div>
        <div class="image-item">Comments <span class="image-elem">${comments}</span></div>
        <div class="image-item">Downloads <span class="image-elem">${downloads}</span></div>
  </figcaption>
  </figure>
</a >`
    }

// спливаюче вікно про помилку бібліотеки iziToast
function errorShow() {
              iziToast.show({
                    close: true,
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                  messageColor: '#FFFFFF',
                    messageSize: '10px',
                    backgroundColor: '#B51B1B',
                    position: 'topLeft',
                    close: true,
                  timeout: 10000,
                  progressBarColor: '#FFFFFF',
                  maxWidth: '380px',
                    });
}