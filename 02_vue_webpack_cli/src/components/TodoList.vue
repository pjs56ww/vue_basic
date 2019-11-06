<template>
  <div class="todo-list">
  <h2>{{ category }}</h2>
  <input type="text" v-model="newTodo">
  <!-- TODO: 누를 때 마다 addTodo 함수를 실행한다. -->
  <button v-on:click="addTodo">+</button>
  <!-- TODO: todos 를 반복하며 todo 를 li 태그로 표현한다. -->
    <ul>
      <li v-for="todo in todos" v-bind:key="todo.id">
        <span>{{ todo.content }}</span>
        <!-- TODO: 누를 때 마다 removeTodo 함수를 실행한다. -->
        <button v-on:click="removeTodo(todo.id)">x</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {  // ES6 이후 문법 무언가를 export 하겠다. 내부의 방식이 달라짐.
  data: function () {
    return {
      todos: [],
      newTodo: '',
    }
  },
  props: { // props 는 component 에 속성을 전달할 수 있게 해주는 기능
    'category' : {
      type: String,
      required: true,
    }
  },  

  methods: {
    addTodo: function () {

      this.todos.push({
        id: new Date().getTime(),
        content: this.newTodo
      })
      this.newTodo = ''
    },
    removeTodo: function (target_id) {
      const newTodos = this.todos.filter(todo => {
        return todo.id !== target_id
      })
      this.todos = newTodos
    }
  },
}


</script>
<style>
  .todo-list {
    display: inline-block;
    width: 33%;
  }
</style>