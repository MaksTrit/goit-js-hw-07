import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

// Створення галереї
function createGallery(arr, listEl) {
  const markup = arr
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join('');
  listEl.insertAdjacentHTML('beforeend', markup);
}
createGallery(galleryItems, gallery);

// Лайтбокс
gallery.addEventListener('click', showLightBox);

function showLightBox(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  };

  const escapeClosing = event => {
    if (event.key === 'Escape') {
      lightBox.close();
    }
    return;
  };
  
  const lightBox = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" alt="${event.target.alt}" width="800" height="600">
`,
    // Закриття по Escape
    {
      onShow: () => {
        gallery.addEventListener('keydown', escapeClosing);
        return;
      },

      onClose: () => {
        gallery.removeEventListener('keydown', escapeClosing);
        return;
      }
    }
  );
  lightBox.show();
}
