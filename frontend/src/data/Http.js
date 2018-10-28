import axios from 'axios';

// const ENDPOINT = 'http://172.18.0.3:4210/';
const ENDPOINT = 'http://localhost:8080/';

export class Http {

    constructor(endpointSuffix) {
        this.endpointSuffix = endpointSuffix || 'api';
    }

    _getEndpoint(url) {
        return ENDPOINT + this.endpointSuffix + '/' + url;
    }

    _getHeaders() {
        return {
            'Content-Type': 'applciation/json',
            'authorization': 'Bearer ' + localStorage.getItem('token'),
        };
    }

    async get(url, query, headers = {}) {
        const response = await axios.get(this._getEndpoint(url), { headers: Object.assign({}, this._getHeaders(), headers) });
        return response.data;
    }

    async post(url, data, headers = {}) {
        const response = await axios.post(this._getEndpoint(url), data, { headers: Object.assign({}, this._getHeaders(), headers) });
        return response.data;
    }
}