import Vue from "vue";
import Vuex from 'vuex';
import todoItems from './modules/todoItems'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todoItems
  }
})