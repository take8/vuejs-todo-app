<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <form>
      <button @click.prevent="addTodo()">ADD TASK</button>
      <button @click.prevent="removeTodo()">DELETE FINISH TASKS</button>
      <p>input: <input type="text" v-model="newTodo"></p>
      <p>task: {{ newTodo }}</p>
    </form>
    <div class="task-list">
      <label class="task-list__item"
             v-for="(todo, index) in todos" :key="index"
             :class="{ 'task-list__item--checked': todo.done }">
        <input type="checkbox" v-model="todo.done"><button>EDIT</button>{{ todo.text }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  props: {
    msg: String
  },
  data () {
    return {
      todos: [
        { text: 'vue-router', done: false },
        { text: 'vuex', done: false },
        { text: 'vue-loader', done: false },
        { text: 'awesome-vue', done: true }
      ],
      newTodo: ''
    }
  },
  methods: {
    addTodo: function (event) {
      let text = this.newTodo && this.newTodo.trim()
      if (!text) {
        return
      }
      this.todos.push(
        { text: this.newTodo, done: false }
      )
      this.newTodo = ''
    },
    removeTodo: function (event) {
      this.todos = this.todos.filter(v => !v.done)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@mixin flex-vender() {
  display: flex;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
}
.task-list {
  @include flex-vender;
  flex-direction: column;
  align-items: center;

  &__item {
    width: 270px;
    text-align: left;
    $element: #{&};

    &--checked {
      @extend #{$element};
      color: #85a6c6;
    }
  }
}
</style>
