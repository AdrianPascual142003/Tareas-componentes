<script>
import { store } from '../store';

export default {
    props: {
        item: Object
    },
    data() {
        return {
        }
    },
    emits: ['delitem'],
    methods: {
        delTodo() {
            store.removeAloneTodoInServer(this.item)
        },
        changeState() {
            store.changeStateServer(this.item)
        }
    }
}
</script>

<template>
    <li v-on:dblclick="delTodo">
    <input @change="changeState()" type="checkbox" :checked="item.done">
    <del v-if="item.done">{{item.text}}</del>
    <span v-else>{{item.text}}</span>
    </li>
</template>