import axios from 'axios';

export function formPost(url, event) {
    event.preventDefault();
    axios.post(url, new FormData(event.target)).then((response) => {
        console.log(response);
    });
}