import axios from 'axios';

// create base url to establish connection to database
const baseUrl = 'http://localhost:3001/currencies';

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}
const create = newId => {
    const request = axios.post(baseUrl, newId);
    return request.then(response => response.data);
  }
const update = (id, newCurrency) => {
    const request = axios.put(`${baseUrl}/${id}`, newCurrency);
    return request.then(response => response.data);
}

const theService = {
    getAll,
    update,
    create
}


export default theService;