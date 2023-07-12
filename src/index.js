// import axios from "axios";
// axios.defaults.headers.common["x-api-key"] = "live_hj3bZ5YYrlS7jC7F7EuKKOPYrFuUayTJnyrIAMNiPu2sdFPugKifPlNkZu0uskLu";

// let api = axios.create({
//   baseURL: 'https://api.thecatapi.com/v1/breeds'
// })
import { fetchBreeds, fetchCatByBreed, refs} from "./cat-api";

// const refs = {
//     select: document.querySelector('.breed-select')
// };

// const BASE_URL = 'https://api.thecatapi.com/v1/'
// const ENDPOINT = 'breeds'
// const API_KEY = 'live_hj3bZ5YYrlS7jC7F7EuKKOPYrFuUayTJnyrIAMNiPu2sdFPugKifPlNkZu0uskLu'
// let storedBreeds = []

fetchBreeds();
fetchCatByBreed();
// function fetchBreeds() {
//     return fetch(`${BASE_URL}${ENDPOINT}?api_key=${API_KEY}`).then(resp => {
//         if (!resp.ok) {
//             throw new Error(resp.statusText)
//         };
//         return resp.json('');
//     })
//         .then((data) => {
   
//             //filter to only include those with an `image` object
//             data = data.filter(img => img.image?.url != null)
   
//             storedBreeds = data;
   
//             for (let i = 0; i < storedBreeds.length; i++) {
//                 const breed = storedBreeds[i];
//                 let option = document.createElement('option');
     
//                 //skip any breeds that don't have an image
//                 if (!breed.image) continue
     
//                 //use the current array index
//                 option.value = i;
//                 option.innerHTML = `${breed.name}`;
//                 refs.select.appendChild(option);
//             }
//             //show the first breed by default
  
//         }).catch(err => console.log(err))
// };


 
//  function fetchBreeds() {
//      fetch(`${BASE_URL}${ENDPOINT}?api_key=${API_KEY}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(response.statusText)
//             }
//         return response.json();
//         })
//          .then((data) => {
            
//             const catInfo = data
//                 .map(({ id, name }) => `<option value='${id}'>${name}</option>`)
//                 .join('');
//             console.log(catInfo)
//             refs.selectEl.insertAdjacentHTML('beforeend', catInfo);
//         }
//         )
//         .catch(err => {
//         console.log(err);
//     })
// }

