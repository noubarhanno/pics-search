import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 5fd49af55ece4f312ab59ef780dbd5b1640d9a7796757951a311961db973e4e8'
    }
});