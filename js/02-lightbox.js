import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

// Створення галереї
function createGallery (arr, listEl) {
    const markup = arr.map(({ preview, original, description }) => 
        `<li class="gallery__item">
           <a class="gallery__link" href="${original}">
             <img class="gallery__image" src="${preview}" alt="${description}"/>
           </a>
        </li>`
    ).join("");
    listEl.insertAdjacentHTML("beforeend", markup);
}
createGallery(galleryItems, gallery);


// Лайтбокс
const lightbox = new SimpleLightbox('.gallery a', {captions: true, captionSelector: 'img', captionDelay: 250, captionsData: 'alt'});
