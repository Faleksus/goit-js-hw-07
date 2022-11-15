import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const refsGallery = document.querySelector('.gallery'); 

function createGallaryMarkup(items) { 
    return items.map( item => `
    <li> 
        <a class="galleryitem" href="${item.original}"> 
            <img class="galleryimage" src="${item.preview}" alt="${item.description}" /> 
        </a> 
    </li>` ).join('');
} 
refsGallery.innerHTML = createGallaryMarkup(galleryItems);

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });