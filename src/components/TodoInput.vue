<template>
  <div class="inputBox shadow">
    <input type="text" placeholder="Type what you have to do" v-model="newTodoItem" @keyup.enter="addTodo">
    <span class="addContainer" @click="addTodo">
      <i class="addBtn fa fa-plus" aria-hidden="true"></i>
    </span>

    <ModalComponent v-if="showModal">
      <h3 slot="header">경고!</h3>
      <div slot="body">할 일을 입력하세요.</div>
      <div slot="footer">
        <button class="modal-default-button" @click="close">Close</button>
      </div>
    </ModalComponent>
  </div>
</template>

<script>
import ModalComponent from'./common/ModalComponent';
// import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      newTodoItem: '',
      showModal: false
    }
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== '') {
        const value = this.newTodoItem && this.newTodoItem.trim();
        this.$store.commit('addTodoItem', value);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = '';
    },
    close() {
      this.showModal = false;
    }
  },
  components: {
    ModalComponent
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: inline-block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>