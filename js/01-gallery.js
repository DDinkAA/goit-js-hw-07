import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBoard = document.querySelector(".gallery");

const imagesMarkup = createGalleryMarkup(galleryItems);

galleryBoard.insertAdjacentHTML("beforeend", imagesMarkup);

galleryBoard.addEventListener("click", onGalleryItemClick);

// console.log(createGalleryMarkup(galleryItems));

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
        <a class = "gallery__link" href = "original.jpq">
        <img  
        class = "gallery__image" 
        src = "${preview}" 
        data-source = "${original}" 
        alt ='${description}'>
        </a>
        </div>
        `;
    })

    .join("");
}

function onGalleryItemClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `
    <div class="modal">
    <img src='${e.target.dataset.source}'>
    </div>,
   `,
    {
      onShow: () => {
        window.addEventListener("keydown", onPressEscape);
      },
      onClose: () => {
        window.removeEventListener("keydown", onPressEscape);
      },
    }
  );

  instance.show();

  function onPressEscape(e) {
    if (e.code !== "Escape") {
      return;
    }

    instance.close();
  }
}
