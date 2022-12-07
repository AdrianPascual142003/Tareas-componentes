<script>
import { store } from '../store'

export default {
    data() {
        return {
            newTodo: '',
        }
    },
    methods: {
        enviarForm() {
            if (this.newTodo) {
                store.addTodo(this.newTodo)
                this.newTodo = ''
            }
        },
    }
}
</script>

<template>
    <form v-on:submit.prevent="enviarForm">
        <input v-model="newTodo">
        <input type="submit" value="Enviar">
    </form>
    <br>
</template>