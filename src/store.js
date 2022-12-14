import { reactive } from 'vue'
import axios from 'axios'

const url='http://localhost:3000'

let id = 0;

export const store = {
    state: reactive({
        todos: [],
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
    mounted() {
        axios.get(url+'/todos')
          .then(response => this.todos=response.data)
          .catch(response => {
            if (!response.status) {// Si el servidor no responde 'response' no es un objeto sino texto
              alert('Error: el servidor no responde');
              console.log(response);
            } else {
              alert('Error '+response.status+': '+response.message);          
            }
            this.todos=[];
          })
      },
      async loadTodos() {
        try {
            var response = await axios.get(url + "/todos");
            response.data.forEach(todo => this.state.todos.push(todo));
        } catch (error) {
            alert("Error " + response.status);            
        }
      },
      async addTodoInServer (newValue) {
        try {
            var response = await axios.post(url + "/todos", {
                text: newValue,
                done: false
            })
            this.state.todos.push(response.data)
        } catch (error) {
            alert("Error " + response.status);
        }
      },
      removeAloneTodoInServer (item) {
        if (confirm("Vas a borrar el todo " + item.text)) {
            this.removeTodoInServer(item);
        }
      },
      async removeTodoInServer(item) {
        try {
            var response = await axios.delete(url + "/todos/" + item.id);
            let posicion = this.state.todos.findIndex(element => element.id === item.id);
            this.state.todos.splice(posicion,1);
        } catch (error) {
            alert("Error " + response.status )
        }
      },
      removeAllInServer () {
        if (confirm("Vas a borrar todos los Todos")) {
            this.state.todos.forEach(todo => this.removeTodoInServer(todo))
        }
      },
      async changeStateServer(item) {
        let element = this.state.todos.find(element => element.id === item.id)
        try {
          var response = await axios.patch(url + "/todos/" + item.id, {
            done: !element.done
          })
        element.done = !element.done;
        } catch (error) {
          alert("Error " + response.statusText);
        }
    },
}
