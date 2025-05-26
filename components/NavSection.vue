<script setup>
import { ref } from 'vue'

defineProps({
  title: String,
  items: Array,
  path: String,         //enlace título 
  isHighlight: Boolean
})

const isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>


<template>
  <div>
    <!-- título como enlace NuxtLink, al click abre/cierra -->
    <NuxtLink :to="path" @click.prevent="toggle" style="cursor: pointer;">
      {{ title }}
    </NuxtLink>

    <!-- lista de items, solo visible si está abierto -->
    <ul v-if="isOpen">
      <li v-for="item in items" :key="item.text">
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

