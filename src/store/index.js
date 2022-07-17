import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    searchedFood:[],
    randomFood:[]
  },
  getters: {
    getSearchedFood: (state) => state.searchedFood,
    getRandomFood: (state) => state.randomFood
  },
  mutations: {
    SET_SEARCHED_FOOD(state,payload){
      state.searchedFood = payload
    },
    SET_RANDOM_FOOD(state,payload){
      state.randomFood = payload
    }
  },
  actions: {
    async searchFood({commit},search){
      try {
        let response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        commit('SET_SEARCHED_FOOD', response.data.meals)
        return response
      } catch (error) {
        console.log(error)
      }
    },
    async randomFood({commit}){
      try {
        let response =  await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
        commit('SET_RANDOM_FOOD', response.data.meals);
        return response
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
