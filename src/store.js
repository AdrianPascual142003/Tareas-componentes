import { reactive } from 'vue'

let id = 0;

export const store = {
    state: reactive({
        todos: [
            { id: id++, text: "Primera cosa", done: false },
            { id: id++, text: "Segunda cosa", done: false },
            { id: id++, text: "Tercera cosa", done: true },
        ],
    }),
    addTodo(newValue) {
        this.state.todos.push( {
            id: id++,
            text: newValue,
            done: false,
        })
    },
    deleteAll() {
        let confirmacion = confirm('Vas a borrar todos los elementos')
        if (confirmacion) {
        this.state.todos.splice(0,this.state.todos.length)
        }
    },
    borraItem(item) {
        let posicion = this.state.todos.findIndex(element => element.id === item.id);
        this.state.todos.splice(posicion,1);
    },
    changeState(item) {
        let element = this.state.todos.find(element => element.id === item.id)
        element.done = !element.done;
    },
}
