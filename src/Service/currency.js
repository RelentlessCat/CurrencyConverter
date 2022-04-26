import axios from 'axios';

// create base url to establish connection to database
const baseUrl = 'http://localhost:3001/currency';

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const theService = {
    getAll
}


export default theService;