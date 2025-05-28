<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    link: String,
    alt: String
})
</script>

<template>
    <img :src="link" :alt="alt">
</template>

<style scoped lang="scss">
img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
}
</style>