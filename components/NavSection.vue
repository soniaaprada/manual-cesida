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

function enter(elem) {
  elem.style.height = '0'
  elem.style.opacity = '0'
  void elem.offsetHeight
  elem.style.transition = 'height 0.4s ease, opacity 0.4s ease'
  elem.style.height = elem.scrollHeight + 'px'
  elem.style.opacity = '1'
  elem.addEventListener('transitionend', () => {
    elem.style.height = 'auto'
    elem.style.transition = ''
  }, { once: true })
}

function leave(elem) {
  elem.style.height = elem.scrollHeight + 'px'
  elem.style.opacity = '1'
  void elem.offsetHeight
  elem.style.transition = 'height 0.4s ease, opacity 0.4s ease'
  elem.style.height = '0'
  elem.style.opacity = '0'
}
</script>

<template>
  <div class="nav-section">
    <NuxtLink :to="path" @click.prevent="toggle" :class="{ highlight: isHighlight, open: isOpen }">
      {{ title }}
    </NuxtLink>
    <transition @enter="enter" @leave="leave">
      <ul v-if="isOpen" class="items-list">
        <li v-for="item in items" :key="item.text" class="item">
          {{ item.text }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.nav-section {
  display: flex;
  flex-direction: column;

  a,
  .nuxt-link {
    all: unset;
    color: $negro;
    text-decoration: none;
    font-family: 'Onest';
    font-size: 1.2rem;
    cursor: pointer;

    &:hover {
      font-weight: 700;
    }
  }

  .highlight {
    font-weight: bold;
    color: $azul;
  }

  .open {
    font-weight: 700;
  }

  .items-list {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    color: $negro;
    gap: 1rem;
    margin-top: 1rem;

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