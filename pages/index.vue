<script setup>
definePageMeta({
    layout: 'landing'
})
</script>

<template>
    <div class="content">
        <div class="header">
            <Imagotipo />
            <a href="/"><svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 -960 960 960" width="2rem"
                    fill="#131415">
                    <path
                        d="M560-160v-80h104L537-367l57-57 126 126v-102h80v240H560Zm-344 0-56-56 504-504H560v-80h240v240h-80v-104L216-160Zm151-377L160-744l56-56 207 207-56 56Z" />
                </svg></a>
        </div>
        <div class="cta">
            <div class="text">
                <h1>CESIDA tiene nueva cara</h1>
                <h3>¿Echamos un vistazo?</h3>
            </div>
            <Button link="/nosotros" color="bn_primary" width="fill">VAMOS</Button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.content {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    gap: 6rem;
    height: 100%;

    .header {
        display: flex;
        align-items: end;
        width: 100%;
        justify-content: space-between;
    }

    .cta {
        display: flex;
        flex-direction: column;
        gap: 4rem;
        height: 75%;

        .text {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }
}
</style>