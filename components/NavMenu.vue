<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import NavSection from './NavSection.vue'

const route = useRoute()

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
      { text: 'Usos' }

    ],
    path: '/submarcas'
  },
  {
    id: 'tipografia',
    title: 'Tipografía',
    items: [
      { text: 'Principal' },
      { text: 'Secundaria' },
      { text: 'Estilos' }
    ],
    path: '/tipografia'
  },
  {
    id: 'color',
    title: 'Color',
    items: [{
      text: 'Paleta de colores'
    }],
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
      { text: 'Mosca Sección' },
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

onMounted(() => {
  const matchingSection = sections.find(section => section.path === route.path)
  if (matchingSection) {
    openId.value = matchingSection.id
  }
})

const toggleSection = (id) => {
  openId.value = openId.value === id ? null : id
}
</script>

<template>
  <nav class="nav-menu">
    <div class="header">
      <NuxtLink to="/">
        <Imagotipo />
        <h4>Manual de marca</h4>
      </NuxtLink>
    </div>
    <NavSection v-for="section in sections" :key="section.id" :title="section.title" :items="section.items"
      :path="section.path" :isHighlight="route.path === section.path" :isOpen="openId === section.id"
      :toggle="() => toggleSection(section.id)" />
  </nav>
</template>

<style scoped lang="scss">
.nav-menu {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  border-right: 4px solid $negro;
  overflow-y: scroll;
  scrollbar-width: none; // Firefox
  -ms-overflow-style: none; // Internet Explorer y Edge

  &::-webkit-scrollbar {
    display: none; // Chrome, Safari y Opera
  }

  .header {
    display: flex;
    flex-direction: column;

    a {
      display: flex;
      flex-direction: column;
      gap: .5rem;
    }

    h4 {
      margin-left: 0.4rem;
    }
  }
}
</style>
