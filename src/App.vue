<template>
  <div id="app">
    Parent counter : {{ parentCounter }}
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  computed: {
    parentCounter() {
      return this.$store.state.counter;
    },
    doubleCounter() {
      return this.$store.getters.doubleCounter;
    }
  },
  methods:{
    addCounter() {
      this.$store.commit('addCounter',10);
      this.$store.commit('addCounter',{
        value:10,
        arr: ["a","b","c"]
      });
    },
    subCounter() {
      this.$store.commit('subCounter');
    }
  }
}
</script>