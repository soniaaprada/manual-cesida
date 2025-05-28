<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    section: String,
    title: {
        type: String,
        default: 'Apartado',
    },
    color: {
        type: String,
        default: 'negro',
    }
})
</script>

<template>
    <section :class="section">
        <h4>{{ section }}</h4>
        <article :class="`${section}_${title}`">
            <h1 class="underlined">{{ title }}</h1>
            <slot></slot>
        </article>
    </section>
</template>

<style scoped lang="scss">
section {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    article {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
}
</style>