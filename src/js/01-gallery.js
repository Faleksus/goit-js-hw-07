import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imgEl = document.querySelector('.gallery')

function createGalleryItems(items) {
    return items.map(item => `
    <div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
            />
        </a>
    </div>
    `).join('');
}

const addImgEl = createGalleryItems(galleryItems)

imgEl.innerHTML = addImgEl;

imgEl.addEventListener('click', onImgClick);

function onImgClick(event) {
    event.preventDefault(event);

    if(event.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width="800" height="600">
    `)
    instance.show()

    imgEl.addEventListener('keydown', (event) => {
        if(event.code === 'Escape') {
            instance.close();
        }
    })
}