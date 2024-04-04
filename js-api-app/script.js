const API_KEY = 'MD-cJCmRXFpNUe1p7XEJnW9zYYrToOPRfFvJpewqEg4';

const formEl = document.querySelector('form');
const inputEl = document.querySelector('#search-input');
const searchResults = document.querySelector('.search-results');
const showMore = document.querySelector('#show-more-button');

let inputData = "";
let page = 1;

async function searchImages() {
  try {
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${API_KEY}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
    const results = data.results;

    console.log(data);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    if (results.length === 0) {
      console.log(inputData);
      console.log(data);
      throw new Error('No Results!');
    }

    if (page === 1) {
      searchResults.innerHTML = "";
    }
    
    results.map((result) => {
      const imageWrapper = document.createElement('div');
      imageWrapper.classList.add('search-result');
      const image = document.createElement('img');
      image.src = result.urls.small;
      image.alt = result.alt_description;
      const imageLink = document.createElement('a');
      imageLink.href = result.links.html;
      imageLink.target = '_blank';
      imageLink.innerHTML = result.alt_description;
      imageLink.style.fontSize = "10px";
      imageLink.style.textAlign = "center";

      imageLink.appendChild(image);
      imageWrapper.appendChild(imageLink);
      searchResults.appendChild(imageWrapper);
    });

    showMore.style.display = 'block';
    searchResults.classList.remove('notFound');
  } catch (error) {
    searchResults.innerHTML = error.message;
    searchResults.classList.add('notFound');
    showMore.style.display = 'none';
  }

}

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  page = 1;
  searchImages()
});

showMore.addEventListener('click', () => {
  page++;
  searchImages()
});

showMore.addEventListener('keydown', () => {
  page++;
  searchImages()
});