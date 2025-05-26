<script setup>
import NavSection from './NavSection.vue'

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

const color = [
  
]

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

const aplicaciones = [
  
]

</script>

<template>
  <nav>
    <img class="logo" src="" alt="">
    <h1>Manual de marca</h1>

    <NavSection title="Nosotros" :items="nosotros" path="/nosotros" isHighlight />
    <NavSection title="Identificador visual" :items="identificador" path="/identificador" />
    <NavSection title="Submarcas" :items="submarcas" path="/submarcas" />
    <NavSection title="Tipografía" :items="tipografia" path="/tipografia" />
    <NavSection title="Color" :items="color" path="/color" />
    <NavSection title="Retículas" :items="reticulas" path="/reticulas" />
    <NavSection title="Imágenes" :items="imagenes" path="/imagenes" />
    <NavSection title="Sistema audiovisual" :items="sistemaAudiovisual" path="/sistema-audiovisual" />
    <NavSection title="Aplicaciones" :items="aplicaciones" path="/aplicaciones" />
  </nav>
</template>