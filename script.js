// Your Unsplash API access key
const accessKey = 'input_your_api_key';

// Number of images to fetch
const numberOfImages = 10;

// Reference to the gallery container
const gallery = document.getElementById('art-gallery');

// Fetch images from Unsplash API
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
