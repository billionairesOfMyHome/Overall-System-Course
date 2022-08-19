<template>
  <div id="app">
    {{num}}
    <button @click="add">
    加 1
    </button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  data(){
    return{
      num:0
    }
  },
  components: {
    HelloWorld,
  },
  methods:{
    add(){
      this.num++;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
