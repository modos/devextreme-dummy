const axios = require('axios').default;

const instance = axios.create({
    baseURL: 'https://dummyjson.com/',
    timeout: 3000
});

export async function getProducts() {
    return await (await instance.get('products')).data
}