import { fetchBreeds, fetchCatByBreed } from "./cat-api";
// import SlimSelect from 'slim-select'
import Notiflix from 'notiflix';
// import 'slim-select/dist/slimselect.cjs'
// new SlimSelect({
//     select: '#selectElement'
// });

import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_hj3bZ5YYrlS7jC7F7EuKKOPYrFuUayTJnyrIAMNiPu2sdFPugKifPlNkZu0uskLu";

let api = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/breeds'
});

const refs = {
    select: document.querySelector('.breed-select'),
    catInfo: document.querySelector('.cat-info'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error'),
};

refs.select.addEventListener('change', onSelect)

// const BASE_URL = 'https://api.thecatapi.com/v1/'
// const ENDPOINT = 'breeds'
// const API_KEY = 'live_hj3bZ5YYrlS7jC7F7EuKKOPYrFuUayTJnyrIAMNiPu2sdFPugKifPlNkZu0uskLu'
function catInfoDell() {
     refs.catInfo.setAttribute('hidden', true);
}
function catInfoAdd() {
    refs.catInfo.removeAttribute('hidden')
}


loaderDell()
function loaderDell() {
    refs.loader.setAttribute('hidden', true);
    }
function loaderAdd() {
    refs.loader.removeAttribute('hidden')
}

function breedSelectDell() {
     refs.select.setAttribute('hidden', true);
}
function breedSelectAdd() {
    refs.select.removeAttribute('hidden')
}

 fetchBreeds().then((data) => {
           
            const catInfo = data
                .map(({ id, name }) => `<option value='' disabled hidden selected>Select cat</option>
                <option value='${id}'>${name}</option>`)
                 .join('');             
     refs.select.insertAdjacentHTML('beforeend', catInfo);     
     
        }
        )
     .catch(err => {
         
         breedSelectDell()

          Notiflix.Notify.failure( refs.error.removeAttribute('hidden'))
        console.log(err);
        })


function onSelect(event) {
loaderAdd()
             breedSelectDell()
             catInfoDell()
    fetchCatByBreed(event.target.value).then((data) => {
            loaderDell()
            breedSelectAdd()
        catInfoAdd()
        let { name, temperament, description } = data[0].breeds[0];
        
        refs.catInfo.innerHTML = `
        <div class="cat-card">
        <img src="${data[0].url}" alt="${name}" srcset=""  class="img-cat"/>
        <div class="cat-description">
       <h2 class="cat-title">${name} </h2>
      <p>${description} class="cat-text"</p>
       <p><span class="cat-span-temperament">Temperament:</span>  ${temperament} class="cat-temperament"</p>
       </div>
       </div>
        `
    }).catch(err => {
        breedSelectDell()
      Notiflix.Notify.failure( refs.error.removeAttribute('hidden'))
        console.log(err);
        })
}













// const refs = {
//     select: document.querySelector('.breed-select')
// };

// const BASE_URL = 'https://api.thecatapi.com/v1/'
// const ENDPOINT = 'breeds'
// const API_KEY = 'live_hj3bZ5YYrlS7jC7F7EuKKOPYrFuUayTJnyrIAMNiPu2sdFPugKifPlNkZu0uskLu'
// let storedBreeds = []
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

