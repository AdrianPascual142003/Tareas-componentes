<script>
import AddTodo from './components/AppAddTodo.vue';
import DelAllTodos from './components/AppDelAllTodos.vue';
import ShowAll from './components/AppShowAll.vue';
import AppTitle from './components/AppTitle.vue';
import { store } from './store';



export default {
  components: {
    AddTodo,
    DelAllTodos,
    ShowAll,
    AppTitle,
  },
  mounted() {
    store.loadTodos();
  }
}
</script>

<template>
  <app-title title="Cosas que hacer"></app-title>
  <show-all></show-all>
  <add-todo></add-todo>
  <del-all-todos></del-all-todos>
</template>