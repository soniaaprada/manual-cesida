<script setup></script>

<template>
    <div class="section-content">
        <Section section="Retículas" title="Impresión" class="section-title">
            <p class="section-text">Se plantean dos retículas a la hora de preparar material impreso en diferentes
                formatos. Por una parte, se debe tener en cuenta la retícula de patrones, que van a sangre y se componen
                de un número de celdas determinados para cada tamaño.<br><br> Las imágenes muestran las retículas para
                los formatos A4 o menor, A3 y A2 o superior, respectivamente.</p>
            <div class="img_wrapper">
                <Image src="/img/patr_a4.jpg" alt="Retícula de patrón en formato A4 o menor" />
                <Image src="/img/patr_a3.jpg" alt="Retícula de patrón en formato A3" />
                <Image src="/img/patr_a2.jpg" alt="Retícula de patrón en formato A2 o mayor" />
            </div>
            <p class="section-text">También se deben aplicar las retículas de composición sobre las retículas de patrón
                previas. Estas servirán como guía para el resto de los elementos compositivos de las piezas y se aplican
                para los formatos A3 o menor y A2 o mayor, respectivamente.
            </p>
            <div class="img_wrapper">
                <Image src="/img/comp_a2.jpg" alt="Retícula de composición en formato A3 o menor" />
                <Image src="/img/comp_a3.jpg" alt="Retícula de composición en formato A2 o mayor" />
            </div>
        </Section>
        <Section title="Digital" class="section-title">
            <p class="section-text">En el caso de las retículas aplicadas a formatos digitales, se da una mayor libertad
                debido a la gran variedad de dispositivos y tamaños. De esta manera, se aplicarán las retículas de
                patrones a sangre igual que anteriormente en función de las dimensiones del formato de destino. En
                cuanto a las retículas compositivas, se aplicarán las proporciones de la misma manera que en el formato
                impreso, ajustando los tamaños en función del dispositivo.</p>
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
        gap: 1rem;

        img {
            border: 1px solid $negro;
            max-width: 30%;
        }
    }
}
</style>