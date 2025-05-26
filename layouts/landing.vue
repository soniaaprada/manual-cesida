<script setup></script>

<template>
    <div class="viewport">
        <slot />
    </div>
</template>

<style scoped lang="scss">
.viewport {
    display: flex;
    width: 100vw;
    height: 100vh;
}
</style>
