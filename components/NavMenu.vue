<script setup>
import { ref } from 'vue'
import NavSection from './NavSection.vue'

const openIndex = ref(null)

const toggleSection = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}

// Contenido de cada sección
const nosotros = [
  { text: 'Intenciones' },
  { text: 'Valores' },
  { text: 'Tono' }
]

const identificador = [
  { text: 'Concepto' },
  { text: 'Construcción' },
  { text: 'Área de respeto' },
  { text: 'Tamaños mínimos' },
  { text: 'Positivo y negativo' },
  { text: 'Usos incorrectos' }
]

const submarcas = [
  { text: 'Construcción' },
  { text: 'Área de respeto' },
  { text: 'Tamaños mínimos' },
  { text: 'Positivo y negativo' },
  { text: 'Usos incorrectos' }
]

const tipografia = [
  { text: 'Principal' },
  { text: 'Secundarias' },
  { text: 'Estilos' }
]

const color = []

const reticulas = [
  { text: 'Impresión' },
  { text: 'Digital' }
]

const imagenes = [
  { text: 'Elementos gráficos' },
  { text: 'Fotografía' }
]

const sistemaAudiovisual = [
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
]

const aplicaciones = []
</script>

<template>
  <nav>
    <img class="logo" src="" alt="">
    <h1>Manual de marca</h1>

    <NavSection
      title="Nosotros"
      :items="nosotros"
      path="/nosotros"
      isHighlight
      :isOpen="openIndex === 0"
      :toggle="() => toggleSection(0)"
    />
    <NavSection
      title="Identificador visual"
      :items="identificador"
      path="/identificador"
      :isOpen="openIndex === 1"
      :toggle="() => toggleSection(1)"
    />
    <NavSection
      title="Submarcas"
      :items="submarcas"
      path="/submarcas"
      :isOpen="openIndex === 2"
      :toggle="() => toggleSection(2)"
    />
    <NavSection
      title="Tipografía"
      :items="tipografia"
      path="/tipografia"
      :isOpen="openIndex === 3"
      :toggle="() => toggleSection(3)"
    />
    <NavSection
      title="Color"
      :items="color"
      path="/color"
      :isOpen="openIndex === 4"
      :toggle="() => toggleSection(4)"
    />
    <NavSection
      title="Retículas"
      :items="reticulas"
      path="/reticulas"
      :isOpen="openIndex === 5"
      :toggle="() => toggleSection(5)"
    />
    <NavSection
      title="Imágenes"
      :items="imagenes"
      path="/imagenes"
      :isOpen="openIndex === 6"
      :toggle="() => toggleSection(6)"
    />
    <NavSection
      title="Sistema audiovisual"
      :items="sistemaAudiovisual"
      path="/sistema-audiovisual"
      :isOpen="openIndex === 7"
      :toggle="() => toggleSection(7)"
    />
    <NavSection
      title="Aplicaciones"
      :items="aplicaciones"
      path="/aplicaciones"
      :isOpen="openIndex === 8"
      :toggle="() => toggleSection(8)"
    />
  </nav>
</template>
