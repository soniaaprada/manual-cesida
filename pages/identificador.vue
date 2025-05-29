<script setup></script>

<template>
    <div class="section-content">
        <Section section="Identificador visual" title="Concepto" class="section-title">
            <p class="section-text">Igual que nuestra comunidad es rica por su variedad, nuestro identificador también se basa en la variabilidad. <br><br>
            Poseemos un isotipo con una parte inferior fija y una parte superior variable que representa a todas las personas que forman CESIDA. Todas las posibilidades de isotipo son una representación válida para la marca en general. <br><br> 
            Si unimos el isotipo a la palabra en sí misma obtenemos el imagotipo correspondiente. </p>
            <Image src="/img/Isotipos_Mesa de trabajo 1.jpg" alt="" />
            <Image src="/img/Imagotipos-02.jpg" alt="" />
            
        </Section>
        <Section title="Construcción" class="section-title">
            <p class="section-text">Para la contrucción del isotipo se establece que las formas de la parte superior deben tener en ancho y alto o al menos uno de ellos el tamaño del cuadrado que le correspondería. Se ajusta a la parte inferior en en centro del trazo en el caso de las formas de trazo recto y a su final de ancho en el caso de las que coinciden en vértice (modificación visual necesaria para la unificación).<br><br>
            </p>
            <Image src="/img/ConstrucciónIsotipo.png" alt="" />

            <p class="section-text">
                En el caso de los imagotipos se utiliza la tipografía Onest Bold. Se crea una retícula basada en la división en cuatro partes de la altura de la x (cada parte = y). La separación entre isotipo y palabra es de 2y, mientras que para equilibrar la composición del imagotipo se añaden 2y en la parte superior de la palabra y 1y por debajo, ajustando el alto del isotipo hasta estos límites y compensando texto e isotipo.
            </p>
            <Image src="/img/ConstrucciónImagotipo.png" alt="" />
        </Section>
        <Section title="Área de respeto" class="section-title">
            <p class="section-text">Se establece como área de respeto la altura de la parte inferior del isotipo por todos los lados del imagotipo.</p>
            <Image src="/img/ÁreaRespeto.jpg" alt="" />
        
        </Section>
        <Section title="Tamaños mínimos" class="section-title">
            <p class="section-text">Se estima que el tamaño mínimo en medios digitales debe ser de 48px. En medios impresos la altura nunca debe ser menor de 12mm</p>
            <Image src="/img/TamañoMínimo.png" alt="" />
        </Section>
        <Section title="Positivo y negativo" class="section-title">
            <p class="section-text">Se contempla la posibilidad de utilizar cualquiera de las siguientes versiones tanto en neutros como en colores principales para su positivo y negativo.</p>
            <Image src="/img/PosNeg.jpg" alt="" />
        </Section>
        <Section title="Usos incorrectos" class="section-title">
            <p class="section-text">Cualquier deformación o cambio tipograáfico o de color fuera de los presentados en este manual se considerará un uso incorrecto del identificador. Por otra parte, para una posible ampliación de la parte variable se establecen la siguientes normas: línea de simetría en la forma, parte inferior tocando la base, blanco interior suficiente y curvas de exterior a interior. </p>
            <div class="img-container">
                <Image src="/img/Ampliación.png" alt="" />
                <Image src="/img/Incorrectos.jpg" alt="" />
                
            </div>
        </Section>
    </div>
</template>


<style scoped lang="scss">

.section-content{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding-bottom: 2rem;
    .section-title{

        .section-text{

        }

        .img-container{
            
            display: flex;
            gap: 1rem;

            img{
                max-width: 50%;
                width: 100%;
                height: auto;
                object-fit: contain;
            }
        }

      
    }
}


</style>