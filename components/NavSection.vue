<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: String,
  items: Array,
  path: String,
  isHighlight: Boolean,
  isOpen: Boolean,
  toggle: Function
})
</script>

<template>
  <div class="nav-section">
    
    <NuxtLink :to="path" 
    @click.prevent="toggle"
    :class="{highlight: isHighlight, open: isOpen}"
>
  {{ title }}
</NuxtLink>
    <ul v-if="isOpen" class="items-list">
      <li v-for="item in items" :key="item.text" class="item">{{ item.text }} </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use '/assets/scss/main.scss' as *; // creo que no funciona el importar main y dentro de main variables, habrá que importar vars todo el rato
@use '/assets/scss/variables' as *;


.nav-section{
  display: flex;
  flex-direction: column;

   

      a, .nuxt-link {
      all: unset; 
      color: $negro; 
      text-decoration: none; 
      font-family: 'Onest Variable';
      font-size: 1.2rem;
      
    }


.highlight {
  font-weight: bold;
  color: blue;
}

.open {
  font-weight: 500;
}

.items-list {
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  color: $negro;
  gap: 1rem;
  
  .item {
    cursor: auto;
    font-family: 'Onest';
    list-style: none;
    font-size: 1rem;
    transition: color 0.5s;
  }
}
}



</style>
