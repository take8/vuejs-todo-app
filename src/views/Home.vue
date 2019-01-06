<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>ToDo Management</h1>
    <hr>
    <Hello msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Hello from '@/components/Hello.vue'

export default {
  name: 'home',
  components: {
    Hello
  }
}
</script>
