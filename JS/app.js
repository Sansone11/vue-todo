// console.log('Js ok');
// Rifare l’esercizio della to do list.
// Ogni todo sarà un oggetto, formato da due proprietà:
// text, una stringa che indica il testo del todo
// done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all’interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene segnato come completato.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante “aggiungi”:
// cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

// creare un array di oggetti
const todos = [{
    text:'fare gli esercizi',
    done:false,
},
{
    text:'fare la spesa',
    done:true,
},
{
    text:'portare fuori il cane',
    done:false,
},
{
    text:'fare la lavatrice',
    done:true,
}]

// collegare vue e collegarlo all'elemento in html

const root = new Vue({
    el:'#root',
    data:{
        // porto l'array dentro i data
        todos:todos,
        classeTodos: 'todo',
        newTodo :'',
    },
    methods: {
        toggleDoneOf(todo){
            todo.done = !todo.done
        },
        addTodo() {
            this.newTodo = this.newTodo.trim()

            if (!this.newTodo) return
            this.todos.push({
                text: this.newTodo,
                done: false
            })
        }
    }
})

const done = false

const task = [done ? 'done' : '', 'todo',]