<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    link: {
        type: String,
        default: '/',
    },
    text: {
        type: String,
        default: 'botón',
    },
    color: {
        type: String,
        default: 'negro',
    }
})
</script>

<template>
    <NuxtLink :class="['button', color]" :to="link"><span>{{ text }}</span></NuxtLink>
</template>

<style scoped lang="scss">
.button {
    display: flex;
    width: fit-content;
    height: fit-content;
    border-radius: 8px;
    padding: .75rem 2rem;
    cursor: pointer;
    border: solid 4px transparent;
}

.bn_primary {
    background-color: $negro;
    color: $blanco;

    &:hover {
        background-color: $blanco;
        color: $negro;
        border: solid 4px $negro;
    }
}

.rr_primary {
    background-color: $rojo;
    color: $blanco;

    &:hover {
        background-color: $rosa;
        color: $blanco;
    }
}

.va_primary {
    background-color: $verde;
    color: $blanco;

    &:hover {
        background-color: $amarillo;
        color: $blanco;
    }
}

.ac_primary {
    background-color: $azul;
    color: $blanco;

    &:hover {
        background-color: $cian;
        color: $blanco;
    }
}

.bn_secondary {
    background-color: $blanco;
    color: $negro;
    border: solid 4px $negro;

    &:hover {
        background-color: $negro;
        color: $blanco;
        border: solid 4px transparent;
    }
}

.rr_secondary {
    background-color: $blanco;
    color: $rojo;
    border: solid 4px $rojo;

    &:hover {
        background-color: $blanco;
        color: $rosa;
        border: solid 4px $rosa;
    }
}

.va_secondary {
    background-color: $blanco;
    color: $verde;
    border: solid 4px $verde;

    &:hover {
        background-color: $blanco;
        color: $amarillo;
        border: solid 4px $amarillo;
    }
}

.ac_secondary {
    background-color: $blanco;
    color: $azul;
    border: solid 4px $azul;

    &:hover {
        background-color: $blanco;
        color: $cian;
        border: solid 4px $cian;
    }
}
</style>