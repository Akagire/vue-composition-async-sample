<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    {{ hoge }}
    {{ users }}
  </div>
</template>

<script>
import { defineComponent, ref } from "@vue/composition-api";
import HelloWorld from "./components/HelloWorld.vue";
import { getUsers } from "./api/user.js";

export default defineComponent({
    components: { HelloWorld },

    setup() {
      const hoge = ref('hoge');
      const users = ref([]);

      const load = async () => {
        const fetchedUsers = await getUsers();
        users.value = fetchedUsers;
      };

      load();

      return {
        hoge,
        users
      };
    },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
