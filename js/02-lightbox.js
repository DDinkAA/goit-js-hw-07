import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBoard = document.querySelector(".gallery");

const imagesMarkup = createGalleryMarkup(galleryItems);

galleryBoard.insertAdjacentHTML("beforeend", imagesMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li>
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" 
      src="${preview}" 
      alt="${description}" />
    </a>
    </li>
        `;
    })
    .join("");
}

galleryBoard.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250",
});


