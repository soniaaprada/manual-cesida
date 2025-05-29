<script setup>
import { ref, onMounted, onBeforeUnmount, h } from 'vue';

const shapes = [
    // círculo
    () => h('svg', {
        id: 'circ',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 120 120',
    }, [
        h('path', {
            d: 'M60,26c18.8,0,34,15.2,34,34s-15.2,34-34,34-34-15.2-34-34S41.2,26,60,26m0-26C26.9,0,0,26.9,0,60s26.9,60,60,60,60-26.9,60-60S93.1,0,60,0h0Z',
            fill: 'currentColor',
        })
    ]),

    // corazón
    () => h('svg', {
        id: 'cora',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 128.7 128.7',
    }, [
        h('path', {
            d: 'M93.9,25c3.6,0,5.9,1.8,7,2.9,2.5,2.5,2.9,4.7,2.9,6.4,0,1.4-.2,3.1-2.2,6.3l-37.3,47.6L27.2,40.6c-2-3.2-2.2-4.9-2.2-6.3,0-1.6,.3-3.9,2.9-6.4,1.1-1.1,3.4-2.9,7-2.9s5.5,1.7,7.9,4.7c.2,.2,.3,.4,.5,.6l1.3,1.7,19.8,25.6,19.8-25.6,1.6-2.1c3.9-4.9,7.1-4.9,8.1-4.9m0-25c-16.1,0-25.3,11.4-27.8,14.6l-1.7,2.2-1.7-2.2c-1.8-2-10.6-14.6-27.9-14.6C25.2,0,16.5,3.9,10.2,10.2,3.9,16.5,0,24.7,0,34.2c0,8.3,2.8,14.8,6.8,20.9l57.5,73.6L121.9,55.1c4-6,6.8-12.6,6.8-20.9,0-9.6-3.9-17.8-10.2-24.1C112.2,3.9,103.5,0,93.9,0h0Z',
            fill: 'currentColor',
        })
    ]),

    // estrella
    () => h('svg', {
        id: 'estr',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 145.7 145.7',
    }, [
        h('path', {
            d: 'M72.6,46.7l5.8,11.4,3.1,6.1,6.1,3.1,11.4,5.8-11,5.5-6.3,3.1-3.1,6.3-5.5,11-5.8-11.4-3.1-6.1-6.1-3.1-11.4-5.8,11-5.5,6.3-3.1,3.1-6.3,5.5-11m-.1-46.7l-24.2,48.3L0,72.5l48.6,24.6,24.6,48.6,24.2-48.3,48.3-24.2-48.6-24.6L72.5,0h0Z',
            fill: 'currentColor',
        })
    ]),

    // cuadrado
    () => h('svg', {
        id: 'cuad',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 133.6 133.6',
    }, [
        h('path', {
            d: 'M66.8,35.4l31.4,31.4-31.4,31.5-31.4-31.5,31.4-31.4m0-35.4L0,66.8l66.8,66.8,66.8-66.8L66.8,0h0Z',
            fill: 'currentColor',
        })
    ]),

    // triángulo
    () => h('svg', {
        id: 'tria',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 138.5 127',
    }, [
        h('path', {
            d: 'M98.1,24l-28.9,52.9L40.4,24h57.7M138.5,0H0L69.3,127,138.5,0h0Z',
            fill: 'currentColor',
        })
    ]),
];

const colors = [['negro', 'negro'], ['azul', 'cian'], ['rojo', 'rosa'], ['verde', 'amarillo']];

const selected_shape = ref('');
const selected_colors = ref([]);
const cells = ref([]);

function initGrid() {
    const pattern_width = window.innerWidth * 0.6;
    const rows = 5;
    const cell_size = window.innerHeight / rows;
    const cols = Math.floor(pattern_width / cell_size);
    const total = cols * rows;

    const [colorA, colorB] = selected_colors.value;

    cells.value = Array.from({ length: total }, () => ({
        visible: Math.random() < 0.5,
        color: Math.random() < 0.5
            ? `color_${colorA.replace('$', '')}`
            : `color_${colorB.replace('$', '')}`,
    }));

    document.documentElement.style.setProperty('--cell-size', `${cell_size}px`);
    document.documentElement.style.setProperty('--grid-cols', cols);
}

onMounted(() => {
    selected_shape.value = shapes[Math.floor(Math.random() * shapes.length)];
    selected_colors.value = colors[Math.floor(Math.random() * colors.length)];
    initGrid();
    window.addEventListener('resize', initGrid);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', initGrid);
});
</script>

<template>
    <div class="viewport">
        <div class="content">
            <slot />
        </div>

        <div class="pattern">
            <template v-for="(cell, i) in cells" :key="i">
                <component v-if="cell.visible" :is="selected_shape" class="shape" :class="cell.color" />
                <div v-else class="shape empty" />
            </template>
        </div>
    </div>
</template>

<style scoped lang="scss">
.viewport {
    display: flex;
    width: 100vw;
    height: 100vh;

    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 6rem;
    }

    .pattern {
        width: 60%;
        height: 100vh;
        display: grid;
        grid-template-columns: repeat(var(--grid-cols), var(--cell-size));
        align-content: start;
        justify-content: end;

        .shape {
            width: var(--cell-size);
            height: var(--cell-size);
            object-fit: contain;
            pointer-events: none;

            &.empty {
                background: none;
                opacity: 0;
            }

            &.color_blanco {
                color: $blanco;
            }

            &.color_negro {
                color: $negro;
            }

            &.color_azul {
                color: $azul;
            }

            &.color_cian {
                color: $cian;
            }

            &.color_rojo {
                color: $rojo;
            }

            &.color_rosa {
                color: $rosa;
            }

            &.color_verde {
                color: $verde;
            }

            &.color_amarillo {
                color: $amarillo;
            }
        }
    }
}

@media (max-width: 1024px) {
    .viewport {
        .pattern {
            width: 50%;
        }
    }
}

@media (max-width: 768px) {
    .viewport {
        flex-direction: column;
        height: auto;

        .pattern {
            width: 100%;
            height: auto;
            justify-content: center;
        }
    }
}
</style>