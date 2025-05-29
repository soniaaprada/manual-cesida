<script setup></script>

<template>
    <div class="section-content">
        <Section section="Nosotros" title="Intenciones" class="section-title">
            <p class="section-text">Se habla de poner cara al VIH, ¿pero cuál es la cara de CESIDA? Si queremos
                visibilizar el VIH lo primero que debemos hacer es crear una identidad sólida y personal para nuestra
                coordinadora estatal de VIH y SIDA. <br><br>
                ¿Y qué hay más identitario que una persona en sí misma? Hemos convertido CESIDA no solamente en una cara
                o una persona, sino en todas aquellas que luchan y apoyan día tras día. <br><br>
                Se crea de este modo la nueva CESIDA, aún más empática, más cercana y más humana para poder trabajar
                desde esta fuerte personalidad en nuestros objetivos fundamentales actualmente: acabar con el estigma,
                desmentir los mitos del VIH y acoger a todo aquel que lo necesite. <br><br>
                Porque todos juntos somos CESIDA.</p>
        </Section>
        <Section title="Valores" class="section-title">
            <div class="valores">
                <div class="valores-item">
                    <h4>Lazos</h4>
                    <p class="section-text">Somos una gran familia. Desarrollamos relaciones fuertes, empáticas y
                        reales, como las personas por las que trabajamos.</p>
                </div>
                <div class="valores-item">
                    <h4>Inclusión</h4>
                    <p class="section-text">No dejamos a nadie de lado. La edad, género, orientación sexual o
                        procedencia no importan, pero las personas sí.</p>
                </div>
                <div class="valores-item">
                    <h4>Foco</h4>
                    <p class="section-text">Para hacer las cosas bien hay que centrarse, y nosotros ponemos el foco en
                        lo que realmente importa.</p>
                </div>
            </div>
        </Section>
        <Section title="Tono" class="section-title">
            <p class="section-text">Siempre nos dirigimos a las personas con un tono cercano para crear un entorno de
                protección y seguridad, como lo haría cualquier padre o madre. Pero no por eso estamos estancados en el
                pasado y la tradición, ajenos a los problemas y preocupaciones de las nuevas generaciones. <br><br>
                Somos adultos, pero también jóvenes; nos preocupamos, pero también disfrutamos. En CESIDA hay todo tipo
                de personas, muy diferentes pero luchando por una misma causa. <br><br>
                Por eso, nos dirigimos a las personas con un tono cercano y directo. Tenemos muy claro lo que importa, y
                así de claro queremos hacerlo llegar al mundo.</p>
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

        .valores {
            display: flex;
            flex-direction: column;
            gap: 0.8rem;

            .valores-item {
                display: flex;
                flex-direction: column;
                gap: 0.8rem;

                .section-text {}
            }
        }

        .section-text {}
    }
}
</style>