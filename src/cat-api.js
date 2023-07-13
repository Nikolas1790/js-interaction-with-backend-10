// import axios from "axios";
// axios.defaults.headers.common["x-api-key"] = "live_hj3bZ5YYrlS7jC7F7EuKKOPYrFuUayTJnyrIAMNiPu2sdFPugKifPlNkZu0uskLu";

// let api = axios.create({
//   baseURL: 'https://api.thecatapi.com/v1/breeds'
// })



// function fetchBreeds() {
   
//      fetch(`${BASE_URL}${ENDPOINT}?api_key=${API_KEY}`)
//          .then(response => {
            
//             if (!response.ok) {
//                 throw new Error(response.statusText)
//             }
             
//         return response.json();
//         })
//          .then((data) => {
            
//              console.log(data);
//             const catInfo = data
//                 .map(({ id, name }) => `<option value='${id}'>${name}</option>`)
//                  .join('');
             
//              refs.select.insertAdjacentHTML('beforeend', catInfo);
             
//         }
//         )
//         .catch(err => {
//         console.log(err);
//         })
     
// };

// function fetchCatByBreed(breedId) { 
//     loaderDell();
    
//      return fetch(`${BASE_URL}images/search?api_key=${API_KEY}&breed_ids=${breedId}`)
//          .then(response => {
             
//     if (!response.ok) {
//       console.log('There is an error while fetching a cat');
//       throw new Error(response.statusText);
//     }
//     return response.json();
//          })
// };

const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_hj3bZ5YYrlS7jC7F7EuKKOPYrFuUayTJnyrIAMNiPu2sdFPugKifPlNkZu0uskLu'

export function fetchBreeds() {
    return fetch(`${BASE_URL}/breeds`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json();
        })
}
export function fetchCatByBreed(breedId)
{
    return fetch(`${BASE_URL}/images/search?breed_ids=${breedId}&api_key=${API_KEY}`)
        .then(response => {
            if (!response.ok) {
             throw new Error(response.statusText)
            }
            return response.json()
    })
}