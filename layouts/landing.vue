<script setup></script>

<template>
    <div>
        <slot />
    </div>
</template>

<style scoped lang="scss">
@use "@/assets/scss/main.scss";
.router-link-active {
    background-color: blue;
    color: white;
}
</style>
