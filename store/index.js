import applyChanges from 'devextreme/data/apply_changes'
import * as axios from '../assets/js/axios'

export const state = () => ({
  products : [],
  changes: [],
  editRowKey: null,
  isLoading: false,
})

export const getters = {
  products (state) {
    return state.products
  },
  isLoading(state) {
    return state.isLoading
  },
}

export const mutations = {
  updateIsLoading(state, isLoading) {
    state.isLoading = isLoading
  },

  updateEditRowKey(state, editRowKey) {
    state.editRowKey = editRowKey
  },

  updateChanges(state, changes) {
    state.changes = changes
  },

  updateProducts (state, { change, data }) {
    if (change) {
      change.data = data 
      state.products  = applyChanges(state.products , [change], { keyExpr: 'id' })
    } else {
      state.products  = data
    }
  },

  reOrder(state, data) {
    state.products  = data
  }
}

export const actions = {
  setEditRowKey(context, value) {
    context.commit('updateEditRowKey', value)
  },

  setChanges(context, value) {
    context.commit('updateChanges', value)
  },

  async loadProducts (context) {
    context.commit('updateIsLoading', true)
    try {
      const { products } = await axios.getProducts() 
      context.commit('updateProducts', { data: products })
    } finally {
      context.commit('updateIsLoading', false)
    }
  },

  async insert(context, change) {
    const data = await axios.addProduct(change.data)
    context.commit('updateProducts', { change, data })
  },

  async update(context, change) {
    const data = await axios.updateProduct(change.key, change.data)
    context.commit('updateProducts', { change, data })
  },

  async remove(context, change) {
    const data = await axios.deleteProduct(change.key)
    context.commit('updateProducts', { change, data })
  },

  reOrder(context, data) {
    context.commit('reOrder', data)
  },

  async saveChange({ commit, dispatch }, change) {
    if (change && change.type) {
      commit('updateIsLoading', true)

      try {
        switch (change.type) {
          case 'insert':
            await dispatch('insert', change)
            break 
          case 'update':
            await dispatch('update', change)
            break 
          case 'remove':
            await dispatch('remove', change)
            break 
          default:
            break 
        }
      } finally {
        commit('updateIsLoading', false)
      }
    }
    commit('updateEditRowKey', null)
    commit('updateChanges', [])
  },
}