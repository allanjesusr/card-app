import axios from 'axios';

export const cardApi = axios.create({
    baseURL: 'https://pastebin.com/raw'
})