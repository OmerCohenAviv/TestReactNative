import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://moonsite-rn-follow-test.herokuapp.com/api/'
});

export default instance;