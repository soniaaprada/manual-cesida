<script setup></script>

<template>
    <div class="section-content">
        <Section section="Aplicaciones" title="Aplicaciones" class="section-title">
            <p class="section-text">A continuación se presentan algunos ejemplos de aplicación que siguen las pautas
                establecidas previamente en este manual.<br>Se trata de una pequeña muestra, pero siempre que se
                cumplan las normas, la posibilidad de aplicaciones es infinita.</p>
            <Image src="/img/mock_poster.png" alt="Pósters de calle con patrones" />
            <Image src="/img/mock_mural.png" alt="Mural de calle con patrones" />
            <Image src="/img/mock_mupi.png" alt="Mupi con pósters de patrones" />
            <Image src="/img/mock_tarjeta.png" alt="Tarjetas de visita con patrones" />
            <Image src="/img/mock_id_1.png" alt="Identificador de staff con patrones" />
            <Image src="/img/mock_id_2.png" alt="Identificador de staff con patrones" />
            <Image src="/img/mock_papelería.png" alt="Papelería con patrones" />
        </Section>


    </div>
</template>

<style scoped lang="scss">
.section-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-bottom: 2rem;

    .img_wrapper {
        display: flex;
        gap: 2rem;

        img {
            width: 100%;
        }
    }
}
</style>