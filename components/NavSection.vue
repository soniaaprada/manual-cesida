<script setup>
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
    <NuxtLink :to="path" @click.prevent="toggle" style="cursor: pointer;">
      {{ title }}
    </NuxtLink>

    <ul v-if="isOpen">
      <li v-for="item in items" :key="item.text">
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use "/assets/scss/main.scss";

.router-link-active {
  background-color: blue;
  color: white;
}
</style>