// import axios from "axios";
// axios.defaults.headers.common["x-api-key"] = "live_hj3bZ5YYrlS7jC7F7EuKKOPYrFuUayTJnyrIAMNiPu2sdFPugKifPlNkZu0uskLu";


const BASE_URL = 'https://api.thecatapi.com/v1/'
const ENDPOINT = 'breeds'
const API_KEY = 'live_hj3bZ5YYrlS7jC7F7EuKKOPYrFuUayTJnyrIAMNiPu2sdFPugKifPlNkZu0uskLu'

function get() {
    return fetch(`${BASE_URL}${ENDPOINT}?api_key=${API_KEY}`).then(resp => {
        if (!resp.ok) {
            throw new Error(resp.statusText)
        };
        return resp.json('');
    })
}
get().then(d => console.log(d)).catch(err => console.log(err))

// const refs = {
//     select: document.querySelector('.breed-select')
// };

// refs.select.addEventListener('click', onClockChangeCat);

// function onClockChangeCat() {
    
// }
