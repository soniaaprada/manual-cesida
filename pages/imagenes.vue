<script setup></script>

<template>
    <div class="section-content">
        <Section section="Imágenes" title="Elementos gráficos" class="section-title">
            <p class="section-text">Se pueden utilizar las formas planteadas de dos maneras: como patrón de fondo, de
                acuerdo a las retículas explicadas en su apartado correspondiente; o como marco para otros elementos.
                Sin embargo, en aplicaciones concretas y puntuales se puede llegar a romper el patrón, convirtiéndose
                las formas en elementos gráficos principales que interactúen entre sí.</p>
            <div class="img_wrapper">
                <Image src="/img/circ.svg" alt="Círculo" />
                <Image src="/img/cora.svg" alt="Corazón" />
                <Image src="/img/estr.svg" alt="Estrella" />
                <Image src="/img/cuad.svg" alt="Cuadrado" />
                <Image src="/img/tria.svg" alt="Triángulo" />
            </div>
            <div class="img_wrapper">
                <Image src="/img/patr_1.jpg" alt="Patrón de círculos" />
                <Image src="/img/patr_2.jpg" alt="Patrón de estrellas" />
            </div>
            <div class="img_wrapper">
                <Image src="/img/patr_3.jpg" alt="Patrón de cuadrados" />
                <Image src="/img/patr_4.jpg" alt="Patrón de corazones" />
            </div>
        </Section>
        <Section title="Fotografía" class="section-title">
            <p class="section-text"> Solamente se plantea el uso de imagen fotográfica en el caso de los carteles en los
                que estas son parcialmente tapadas por planos de color. Las imágenes deben ser naturales, sin filtros
                dramáticos de color y se debe buscar una consonancia entre el color sólido del marco y los tonos de la
                imagen. </p>
            <Image src="/img/EjemploImg.jpg" alt="Retrato sobre fondo rojo" />
            <Image src="/img/EjemploImg2.jpg" alt="Retrato sobre fondo amarillo" />

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