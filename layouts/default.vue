<script setup>
import { ref } from 'vue';
import NavMenu from '~/components/NavMenu.vue';

const sidebarVisible = ref(false);

function toggleSidebar() {
    sidebarVisible.value = !sidebarVisible.value;
}
</script>

<template>
    <div class="viewport">
        <button class="sidebar_toggle" @click="toggleSidebar">
            ☰
        </button>
        <aside class="sidebar" :class="{ visible: sidebarVisible }">
            <NavMenu />
        </aside>
        <div class="content_wrapper">
            <div class="content">
                <slot />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.viewport {
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;

    .sidebar_toggle {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1001;
        color: $negro;
        border: none;
        padding: 0.5rem .75rem;
        font-size: 1.5rem;
        cursor: pointer;
    }

    .sidebar {
        display: flex;
        width: 25%;
        min-width: fit-content;
        background: $blanco;
        transition: transform 0.3s ease;
        z-index: 1000;
    }

    .content_wrapper {
        display: flex;
        padding: 2rem;
        justify-content: center;
        flex: 1;
        overflow: scroll;
        transition: filter 0.3s ease;

        .content {
            display: flex;
            flex-direction: column;
            gap: 3rem;
            height: fit-content;
            width: clamp(40vw, 50%, 80vw);
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;

        .sidebar_toggle {
            display: block;
        }

        .sidebar {
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            width: 100%;
            max-width: fit-content;
            background: $blanco;
            transform: translateX(-100%);
            overflow-y: scroll;
        }

        .sidebar.visible {
            transform: translateX(0);
        }
    }
}
</style>
