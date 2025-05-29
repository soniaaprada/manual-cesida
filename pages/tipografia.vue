<script setup></script>

<template>
    <div class="section-content">
        <Section section="Tipografía" title="Principal" class="section-title">
            <p class="section-text"> La tipografía Onest, sans-serif, se utiliza como tipografía corporativa para la
                creación del imagotipo al mismo tiempo que se utiliza como tipografía principal y más destacada. </p>
            <Image src="/img/Onest.jpg" alt="" />
        </Section>
        <Section title="Secundaria" class="section-title">
            <p class="section-text"> Como tipografía complementaria se utiliza Atkinson Hyperlegible Mono,
                monoespaciada, que da un toque diferenciador a subtitulos o resaltes. </p>
            <Image src="/img/Atkinson.jpg" alt="" />
        </Section>
        <Section title="Estilos" class="section-title">
            <p class="section-text"> A continuación se muestran todos los estilos con su respectivo peso y tamaño
                extraídos de la página web. Además, en cartelería siempre se aplica un tamaño igual o mayor que el
                superior de todos ellos. </p>
            <Image src="/img/EstilosEscritorio.png" alt="" />
            <Image src="/img/EstilosMóvil.png" alt="" />
        </Section>
    </div>
</template>

<style scoped lang="scss">
.section-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-bottom: 2rem;

    .section-title {
        .section-text {}
    }
}
</style>