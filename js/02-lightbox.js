import { galleryItems } from './gallery-items.js';
// Change code below this line
const collectionImg = document.querySelector('.gallery');

const markupGallery = galleryItems 
  .map(({preview, original, description}) => `<li> <a class="gallery__item" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"    
    alt="${description}"    
   />
  </a>
  </li>
`)
  .join("");

collectionImg.insertAdjacentHTML("beforeend", markupGallery);

new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });


