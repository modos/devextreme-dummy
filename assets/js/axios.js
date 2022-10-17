const axios = require('axios').default;

const instance = axios.create({
    baseURL: 'https://dummyjson.com/',
    timeout: 3000
});

export async function getProducts() {
    return await (await instance.get('products')).data
}

export async function deleteProduct(id) {
    return await (await instance.delete('products/' + id)).data
}

export async function updateProduct(id, body) {
    return await (await instance.put('products/' + id), body, {
        headers: { 'Content-Type': 'application/json' },
    }).data
}

export async function addProduct(data) {
    return await (await instance.post('products/add', data, {
        headers: { 'Content-Type': 'application/json' },
    })).data
}