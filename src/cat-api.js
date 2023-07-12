// import axios from "axios";
// axios.defaults.headers.common["x-api-key"] = "live_hj3bZ5YYrlS7jC7F7EuKKOPYrFuUayTJnyrIAMNiPu2sdFPugKifPlNkZu0uskLu";

// let api = axios.create({
//   baseURL: 'https://api.thecatapi.com/v1/breeds'
// })

const refs = {
    select: document.querySelector('.breed-select'),
    catInfo: document.querySelector('.cat-info'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error'),
};

const BASE_URL = 'https://api.thecatapi.com/v1/'
const ENDPOINT = 'breeds'
const API_KEY = 'live_hj3bZ5YYrlS7jC7F7EuKKOPYrFuUayTJnyrIAMNiPu2sdFPugKifPlNkZu0uskLu'

function fetchBreeds() {
     
     fetch(`${BASE_URL}${ENDPOINT}?api_key=${API_KEY}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
        return response.json();
        })
         .then((data) => {
             console.log(data);
            const catInfo = data
                .map(({ id, name }) => `<option value='${id}'>${name}</option>`)
                .join('');
                refs.select.insertAdjacentHTML('beforeend', catInfo);
        }
        )
        .catch(err => {
        console.log(err);
        })
     
};

 function fetchCatByBreed(breedId) { 
     return fetch(`${BASE_URL}images/search?api_key=${API_KEY}&breed_ids=${breedId}`)
         .then(response => {
    if (!response.ok) {
      console.log('There is an error while fetching a cat');
      throw new Error(response.statusText);
    }
    return response.json();
         })
};



refs.select.addEventListener('change', onSelect)

function onSelect(event) {
    
    fetchCatByBreed(event.target.value).then((data) => {
       
        refs.catInfo.innerHTML = `
        <img src="${data[0].url}" alt="${data[0].breeds[0].name}" srcset="" width='300'/>
        <div class="">
       <h2>${data[0].breeds[0].name}</h2>
      <p>${data[0].breeds[0].description}</p>
       <p>Temperament:${data[0].breeds[0].temperament}</p>
       </div>
        `
    })
}


export { fetchBreeds, fetchCatByBreed, refs };




