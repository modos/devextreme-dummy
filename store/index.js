import 'whatwg-fetch';
import applyChanges from 'devextreme/data/apply_changes'
import { sendRequest } from '../assets/js/utils'
import * as axios from '../assets/js/axios'

const URL = 'https://js.devexpress.com/Demos/Mvc/api/DataGridWebApi';

export const state = () => ({
  orders: [],
  changes: [],
  editRowKey: null,
  isLoading: false,
})

export const getters = {
  orders(state) {
    return state.orders;
  },
  isLoading(state) {
    return state.isLoading;
  },
}

export const mutations = {
  updateIsLoading(state, isLoading) {
    state.isLoading = isLoading;
  },

  updateEditRowKey(state, editRowKey) {
    state.editRowKey = editRowKey;
  },

  updateChanges(state, changes) {
    state.changes = changes;
  },

  updateOrders(state, { change, data }) {
    if (change) {
      change.data = data;
      state.orders = applyChanges(state.orders, [change], { keyExpr: 'id' });
    } else {
      state.orders = data;
    }
  },

  reOrder(state, data) {
    state.orders = data
  }
}

export const actions = {
  setEditRowKey(context, value) {
    context.commit('updateEditRowKey', value);
  },

  setChanges(context, value) {
    context.commit('updateChanges', value);
  },

  async loadOrders(context) {
    context.commit('updateIsLoading', true);
    try {
      const { products } = await axios.getProducts();
      console.log(products);
      context.commit('updateOrders', { data: products });
    } finally {
      context.commit('updateIsLoading', false);
    }
  },

  async insert(context, change) {
    const data = await axios.addProduct(change.data)
    context.commit('updateOrders', { change, data })
  },

  async update(context, change) {
    console.log(change);
    const data = await axios.updateProduct(change.key, change.data)

    context.commit('updateOrders', { change, data })
  },

  async remove(context, change) {
    const data = await axios.deleteProduct(change.key)
    context.commit('updateOrders', { change, data })
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
            break;
          case 'update':
            await dispatch('update', change)
            break;
          case 'remove':
            await dispatch('remove', change)
            break;
          default:
            break;
        }
      } finally {
        commit('updateIsLoading', false)
      }
    }
    commit('updateEditRowKey', null)
    commit('updateChanges', [])
  },
}