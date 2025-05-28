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
        background-color: lightpink;
        display: flex;
        width: 25%;
        min-width: 300px;

    }

    .content_wrapper {
        background-color: lightblue;
        display: flex;
        justify-content: center;
        flex: 1;
        overflow: scroll;

        .content {
            display: flex;
            flex-direction: column;
            gap: 3rem;
            width: 50%;
        }
    }
}
</style>
