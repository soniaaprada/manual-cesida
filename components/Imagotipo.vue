<script setup>
import { ref, onMounted, onUnmounted, watch, computed } from 'vue';

const props = defineProps({
    static: Number
});

const isotipos = ['/img/iso_circ.svg', '/img/iso_cora.svg', '/img/iso_estr.svg', '/img/iso_cuad.svg', '/img/iso_tria.svg'];

const current = ref(props.static ?? 0);
let timer;

const is_static = computed(() => props.static !== undefined)

onMounted(() => {
    if (!is_static.value) {
        timer = setInterval(() => {
            current.value = (current.value + 1) % isotipos.length
        }, 800)
    }
})

onUnmounted(() => clearInterval(timer))

watch(() => props.static, (new_value) => {
    if (new_value !== undefined) {
        clearInterval(timer)
        current.value = new_value
    }
})
</script>

<template>
    <div class="imagotipo">
        <div class="iso_wrapper">
            <img class="iso" :src="isotipos[current]" alt="Isotipo de CESIDA">
        </div>
        <div class="logo_wrapper">
            <img class="logo" src="/public/img/logo.svg" alt="Logotipo de CESIDA">
        </div>
    </div>
</template>

<style scoped lang="scss">
.imagotipo {
    display: flex;
    align-items: end;
    gap: .6rem;

    .iso_wrapper {
        display: flex;
        align-items: end;
        justify-content: center;
        width: 4rem;
        height: 4rem;

        .iso {
            height: 3rem;
        }
    }

    .logo_wrapper {
        height: 60%;
        width: 100%;

        .logo {
            height: 2rem;
        }
    }
}
</style>