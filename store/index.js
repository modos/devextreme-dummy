import * as axios from '../assets/js/axios'
export const state = () => ({
    products: []
})

export const mutations = {
    setProducts(state, products) {
        state.products = products
    }
}

export const actions = {
    async fetchProducts({ state, commit }) {
        try {
            const data = await axios.getProducts()
            commit('setProducts', data.products)
        }
        catch (error) {
            console.log(error)
        }
    }
}