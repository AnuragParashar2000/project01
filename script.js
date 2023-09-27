const accessKey = 'input_your_api_key';

const numberOfImages = 10;

const gallery = document.getElementById('art-gallery');

fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}&count=${numberOfImages}`)
   .then((response) => response.json())
   .then((data) => {
       data.forEach((image) => {
           const imgElement = document.createElement('img');
           imgElement.src = image.urls.regular;
           imgElement.alt = image.alt_description;
           imgElement.classList.add('art-image');
           gallery.appendChild(imgElement);
       });
   })
   .catch((error) => {
       console.error('Error fetching images:', error);
   });
