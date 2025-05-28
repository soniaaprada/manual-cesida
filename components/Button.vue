<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    text: String,
    color: {
        type: String,
        default: 'negro',
    },
  
})


</script>

<template>
    
        <NuxtLink to="/nosotros">
            <button :class="[color]">
                <span>{{ text }}</span>
            </button>
        </NuxtLink>
    
</template>

<style scoped lang="scss">
    

    button{
        display: flex;
        border-radius: 8px;
        padding: .75rem 2rem ;    
        display: flex;  
        cursor: pointer;
        border: solid 4px transparent;
    }

    .negro{
        background-color: $negro;
        color: $blanco;
        &:hover {
            background-color: $blanco;
            color: $negro;
            border: solid 4px $negro;
        }
    }

    .blanco{
        background-color: $blanco;
        color: $blanco;
    }

    .rojo{
        background-color: $rojo;
        color: $blanco;
    }

    .rosa{
        background-color: $rosa;
        color: $blanco;
    }

    .amarillo{
        background-color: $amarillo;
        color: $blanco;
    }

    .verde{
        background-color: $verde;
        color: $blanco;
    }

    .cian{
        background-color: $cian;
        color: $blanco;
    }

    .azul{
        background-color: $azul;
        color: $blanco;
    }
</style>