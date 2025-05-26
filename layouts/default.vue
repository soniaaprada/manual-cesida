<script setup>
import NavMenu from '~/components/NavMenu.vue'
</script>

<template>
    <div class="viewport">
        <aside class="sidebar">

            <NavMenu />

            <!-- <h1>nav</h1>
        <ul>
            <li>
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/nosotros">Nosotros</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/identificador">Identificador</NuxtLink>
            </li>
        </ul> -->
        </aside>
        <div class="content">
            <slot />
        </div>
    </div>
</template>

<style scoped lang="scss">
.viewport {
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;

    .sidebar {
        background-color: lightpink;
        display: flex;
        width: 25%;
        min-width: 240px;

    }

    .content {
        background-color: lightblue;
        flex: 1;
    }
}
</style>
