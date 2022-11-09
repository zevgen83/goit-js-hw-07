import { galleryItems } from './gallery-items.js';
// Change code below this line
const collectionImg = document.querySelector('.gallery');

const markupGallery = galleryItems 
  .map(({preview, original, description}) => `<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"    
  />
</a>`)
  .join("");

collectionImg.insertAdjacentHTML("beforeend", markupGallery);

collectionImg.addEventListener('click', onClick);

function onClick(event) {
  event.preventDefault();

  const targetClick = event.target;
  if (!targetClick.classList.contains("gallery__image")) {
    return;
  } 

  onModalBigPicture(targetClick);
}

function onModalBigPicture(targetClick) {
  const urlBigImg = targetClick.dataset.source;

  const instance = basicLightbox.create(
    `<img src="${urlBigImg}">`, 
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscKeyPress);
      },
  
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscKeyPress);
      },
    });
  instance.show();  


function onEscKeyPress (event) {  
  if (event.key === "Escape") {
    instance.close();
  }  
}
}


