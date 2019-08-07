import Vue from "vue"
import Vuex from "vuex"
import api from "../api/api"
import furnitureDelivery from "./modules/furnitureDelivery"
import furnitureStyles from "./modules/furnitureStyles"
import furnitureSearch from "./modules/furnitureSearch"

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
Vue.config.productionTip = false

export default new Vuex.Store({
  strict: debug,
  modules: {
    api,
    furnitureDelivery,
    furnitureStyles,
    furnitureSearch
  }
  // state: {
  //   furnitureStyles: [],
  //   furnitureProducts: []
  // },
  // mutations: {
  //   setFurnitureStates(state, payload) {
  //     state.furnitureProducts = payload.products
  //     state.furnitureStyles = payload.furniture_styles
  //   }
  // },
  // actions: {
  //   async getFurnitureData({dispatch, commit}) {
  //     const payload = await dispatch("fetchApi")
  //     commit("setFurnitureStates", payload)
  //   },
  //   async fetchApi() {
  //     return fetch('https://www.mocky.io/v2/5c9105cb330000112b649af8')
  //     .then(response => response.json())
  //     .then(data => data)
  //     .catch(Error("api error"))
  //   }
  // },
  // getters: {
  //   furnitureProducts(state) {
  //     return state.furnitureProducts
  //   },
  //   furnitureStyles(state) {
  //     return state.furnitureStyles
  //   }
  // }
})