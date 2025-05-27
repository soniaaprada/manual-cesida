<script setup>
import { ref } from 'vue'
import NavSection from './NavSection.vue'

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
]

const openId = ref(null)

const toggleSection = (id) => {
  openId.value = openId.value === id ? null : id
}
</script>

<template>
  <nav class="nav-menu">
    <div class="header">
      <img class="logo" src="" alt="" />
      <!-- habría que incluir el logo en todas sus versiones si queremos ponerlo variable -->
      <h1>Manual de marca</h1>
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

  .header {
    h1 {
      font-family: 'Atkinson Mono';
      font-size: 1.2rem;

    }

    img {}
  }


}
</style>
