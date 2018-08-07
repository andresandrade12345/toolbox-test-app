import axios from 'axios'

const defaultConfig = {
    headers: {
        'Content-Type': 'application/json',
    },
};

const post = ({ url = '', data = {}, config = defaultConfig }) => {
    return axios.post(url, data, config)
};

const get = ({ url }) => axios.get(url);

const put = ({ url = '', data = {}, config = defaultConfig }) => {
    return axios.put(url, data, config)
};

const del = ({ url = '', config = defaultConfig }) => {
    return axios.delete(url, config)
};

const HttpClient = {
    post,
    get,
    put,
    delete: del,
};

export default HttpClient;