<script setup>
definePageMeta({
    layout: 'landing'
})
</script>

<template>
    <div class="content">
        <div class="text">
            <h1>CESIDA tiene nueva cara</h1>
            <h3>¿Echamos un vistazo?</h3>
        </div>
        <Button link="/nosotros" color="bn_primary" width="fill">VAMOS</Button>
    </div>
</template>

<style scoped lang="scss">
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6rem;

    .Button {
        display: none;
    }
}
</style>