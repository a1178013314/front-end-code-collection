<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)

function getType(count){
  return count===1?"yes":"no"
}


</script>

<template>
  <h1>{{ count===1?"yes":"no" }}</h1>
  <h1>{{ getType(count) }}</h1>

  
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
