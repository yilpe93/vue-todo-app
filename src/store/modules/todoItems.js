const state = {
  todoItems: []
}

const getters = {
  getTodoItems: state => {
    return state.todoItems;
  }
}

const actions = {

}

const mutations = {
  addTodoItem(state, item) {
    // # state.todoItems
    state.todoItems.push(item);
    localStorage.setItem(item, item);
  },
  removeTodoItem(state, obj) {
    // console.log(obj);
    state.todoItems.splice(obj.index, 1);
    localStorage.removeItem(obj.todoItem);
  },
  removeAllItems(state) {
    state.todoItems = [];
    localStorage.clear();
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}