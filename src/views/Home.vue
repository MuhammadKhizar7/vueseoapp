<template>
  <div>home</div>
  <div>
    <ul>
      <li v-for="block in blocks">
        <router-link :to="`/block/${block.id}`">{{ block.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useblock } from '../composeables/usebock'
const blocks = useblock()
console.log(blocks)
</script>
