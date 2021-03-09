<template>
  <div @click="increment">{{counter}}</div>
</template>

<script>
export default {
  name: "App3",
  data(){
    return{
      counter:0
    }
  },
  methods:{
    increment(){
      this.counter++
    }
  }
}
</script>

<style scoped>

</style>