<script setup>
import NavMenu from '~/components/NavMenu.vue'
</script>

<template>
    <div class="viewport">
        <aside class="sidebar">
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

    .sidebar {
        display: flex;
        width: 25%;
        min-width: fit-content;

    }

    .content_wrapper {
        display: flex;
        padding: 2rem;
        justify-content: center;
        flex: 1;
        overflow: scroll;

        .content {
            display: flex;
            flex-direction: column;
            gap: 3rem;
            height: fit-content;
            width: clamp(40vw, 50%, 80vw);
        }
    }
}
</style>
