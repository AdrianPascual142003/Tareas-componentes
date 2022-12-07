<script>
import { store } from '../store'
import TodoItem from './AppTodoItem.vue'

export default {
    components: {
        TodoItem
    },
    data() {
        return {
            todos: store.state.todos
        }
    },
    methods: {
        borraItem(item) {
            store.borraItem(item)
        }
    }
}
</script>

<template>
    <template v-if="todos.length">
        <p>Total de cosas: {{ todos.length }}</p>
        <ul>
            <todo-item v-for="item in todos" :key="item.id" v-bind:item="item" @delitem="borraItem"></todo-item>
        </ul>
    </template>
    <p v-else>No hay elementos</p>
</template>