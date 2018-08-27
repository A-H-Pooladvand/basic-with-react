import axios from 'axios';

export function formPost(url, event) {
    event.preventDefault();
    axios.post(url, new FormData(event.target)).then((response) => {

    });
}

export function post(url, state) {

    axios.post(url).then(response => {
        const obj = {};
        obj[state] = response.data;

        this.setState(obj);
    });
}