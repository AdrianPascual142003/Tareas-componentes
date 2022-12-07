<script>
import { store } from '../store';

export default {
    data() {
        return {

        }
    },
    methods: {
        deleteAll() {
            store.deleteAll();
        },
    }
}
</script>

<template>
    <button v-on:click="deleteAll">Borrar todos los elementos</button>
</template>