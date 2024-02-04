import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const formEl = document.querySelector('.form-search');
const imgContainer = document.querySelector('.gallery');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
     e.preventDefault();
    const query = e.target.elements.text.value;
    console.log(query);
    
    if (query === '') { return };
    imgContainer.innerHTML = '';
   
    // getPictures(query).then(data => {console.log(data)});
    getPictures(query).then(data => {renderPictures(data)}); 
   
    e.target.reset();
}

// key — твій унікальний ключ доступу до API.
// q — слово для пошуку. Те, що буде вводити користувач.
// image_type — тип зображення. Потрібні тільки фотографії, тому постав значення photo.
// orientation — орієнтація фотографії. Постав значення horizontal.
//     safesearch — фільтр за віком.Постав значення true.


function getPictures(searchText) {
    const BASE_URL = 'https://pixabay.com/api';
    const API_KEY = '/?key=42190673-143cbde4cd6a94de75e31d0a4';
    const SEARCH_PARAMS = `&q=${searchText}`;
    const PARAMS = '&image_type=photo&orientation=horizontal&safesearch=true';
    
    // https://pixabay.com/api/?key=42190673-143cbde4cd6a94de75e31d0a4&q=yellow+flowers&image_type=photo

    const url = BASE_URL + API_KEY + SEARCH_PARAMS + PARAMS;
    return fetch(url).then(res => res.json());
}

function renderPictures(param) {
    const markup = param.hits.map(imgTemplate).join('');
    imgContainer.innerHTML = markup;
};


// webformatURL — посилання на маленьке зображення для списку карток у галереї
// largeImageURL — посилання на велике зображення для модального вікна
// tags — рядок з описом зображення. Підійде для атрибута alt
// likes — кількість вподобайок
// views — кількість переглядів
// comments — кількість коментарів
// downloads — кількість завантажень

function imgTemplate (obj) {
  return ` <li class="gallery-item">
  <a class="gallery-link" href="${obj.largeImageURL}">
  <img class="gallery-image" src="${obj.webformatURL}" alt="${obj.tags}"/>
  </a></li>` 
}
// let gallery = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt', showCounter: false });
 let gallery = new SimpleLightbox('.gallery a');