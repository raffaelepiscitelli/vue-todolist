const { createApp } = Vue

createApp({
  data() {
    return {
        newTodoElement:'',
        todoList: [
          {text: "fare la lavatrice",done: true},
          {text: "lavare i piatti",done: false},
          {text: "passare l'aspirapolvere",done: true},
          {text: "lavare l'auto",done: false},
          {text: "spolverare",done: true},
          {text: "pulire il pavimento",done: false},
          {text: "fare benzina",done: true},
          {text: "pagare le bollette",done: true},
        ],
    }
  },
  methods: {
    addNewTodoItem() {
      console.warn(this.newTodoElement);
      this.todoList.push({ text: this.newTodoElement, done: false });
      this.newTodoElement = '';
    },
    deleteTask(taskToDelete){
      this.todoList.splice(taskToDelete, 1);
    }
  },
}).mount('#app');