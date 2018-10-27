import axios from 'axios';

const ENDPOINT = 'http://212.237.26.52:3000/';

export class Http {

    constructor(endpointSuffix) {
        this.endpointSuffix = endpointSuffix || 'api/';
    }

    _getEndpoint(url) {
        return ENDPOINT + this.endpointSuffix + '/' + url;
    }

    _getHeaders() {
        return {
            'Content-Type': 'applciation/json',
        };
    }

    async post(url, data, headers = {}) {
        const response = await axios.post(this._getEndpoint(url), data, Object.assign({}, this._getHeaders(), headers));
        return response.data;
    }
}