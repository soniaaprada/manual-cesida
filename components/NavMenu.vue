<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavSection from './NavSection.vue'

// Importar por separado isotipo y logotipo si queremos que quede más fluido y no se note el desplazamiento
const logos = ['/img/logo_circ.svg', '/img/logo_cora.svg', '/img/logo_estr.svg', '/img/logo_cuad.svg', '/img/logo_tria.svg'];

const current_logo = ref(0);

let timer

onMounted(() => {
  timer = setInterval(() => {
    current_logo.value = (current_logo.value + 1) % logos.length
  }, 800)
});

onUnmounted(() => clearInterval(timer));

const sections = [
  {
    id: 'nosotros',
    title: 'Nosotros',
    items: [
      { text: 'Intenciones' },
      { text: 'Valores' },
      { text: 'Tono' }
    ],
    path: '/nosotros',

  },
  {
    id: 'identificador',
    title: 'Identificador visual',
    items: [
      { text: 'Concepto' },
      { text: 'Construcción' },
      { text: 'Área de respeto' },
      { text: 'Tamaños mínimos' },
      { text: 'Positivo y negativo' },
      { text: 'Usos incorrectos' }
    ],
    path: '/identificador'
  },
  {
    id: 'submarcas',
    title: 'Submarcas',
    items: [
      { text: 'Construcción' },
      { text: 'Área de respeto' },
      { text: 'Tamaños mínimos' },
      { text: 'Positivo y negativo' },
      { text: 'Usos incorrectos' }
    ],
    path: '/submarcas'
  },
  {
    id: 'tipografia',
    title: 'Tipografía',
    items: [
      { text: 'Principal' },
      { text: 'Secundarias' },
      { text: 'Estilos' }
    ],
    path: '/tipografia'
  },
  {
    id: 'color',
    title: 'Color',
    items: [],
    path: '/color'
  },
  {
    id: 'reticulas',
    title: 'Retículas',
    items: [
      { text: 'Impresión' },
      { text: 'Digital' }
    ],
    path: '/reticulas'
  },
  {
    id: 'imagenes',
    title: 'Imágenes',
    items: [
      { text: 'Elementos gráficos' },
      { text: 'Fotografía' }
    ],
    path: '/imagenes'
  },
  {
    id: 'sistemaAudiovisual',
    title: 'Sistema audiovisual',
    items: [
      { text: 'Curva Cesida' },
      { text: 'Retícula' },
      { text: 'Mosca' },
      { text: 'Banner aislado' },
      { text: 'Cartela informativa' },
      { text: 'Transición' },
      { text: 'Transición informativa' },
      { text: 'Cierre' },
      { text: 'Sobreimpresión' },
      { text: 'Copyright' }
    ],
    path: '/sistema-audiovisual'
  },
  {
    id: 'aplicaciones',
    title: 'Aplicaciones',
    items: [],
    path: '/aplicaciones'
  }
];

const openId = ref(null);

const toggleSection = (id) => {
  openId.value = openId.value === id ? null : id
}
</script>

<template>
  <nav class="nav-menu">
    <div class="header">
      <div class="logo_wrapper">
        <img class="logo" :src="logos[current_logo]" alt="Logotipo de CESIDA" />
      </div>
      <h4>Manual de marca</h4>
    </div>
    <NavSection v-for="section in sections" :key="section.id" :title="section.title" :items="section.items"
      :path="section.path" :isHighlight="section.isHighlight" :isOpen="openId === section.id"
      :toggle="() => toggleSection(section.id)" />
  </nav>
</template>

<style scoped lang="scss">
@use '/assets/scss/variables' as *;



.nav-menu {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;
  padding: 2rem;
  overflow: scroll;
  overflow-y: scroll; // Permite el scroll vertical
  scrollbar-width: none; // Firefox
  -ms-overflow-style: none; // Internet Explorer y Edge

  &::-webkit-scrollbar {
    display: none; // Chrome, Safari y Opera
  }

  .header {
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }


}
</style>
