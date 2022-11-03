<template>
  <div>
    <p>{{ block.id }}</p>
    <p>{{ block.title }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useblock } from '../composeables/usebock'
const blocks = useblock()
const route = useRoute()

console.log(blocks)
const block = blocks.filter((x) => x.id == route.params.id)[0]
console.log(route.params.id)
console.log(block)
</script>
