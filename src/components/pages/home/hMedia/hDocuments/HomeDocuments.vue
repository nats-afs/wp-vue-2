<template>
  <div class="col s12 m4 l4 documentos">
    <h4>{{title}}</h4>
    <div class="docs-wrapper">
      <documentitem v-for="file in files" :key="file.id" :file="file"></documentitem>
    </div>
  </div>
</template>
<script>
import documentitem from './DocumentItem.vue'
export default {
  components: {
    documentitem,
  },
  // ulr para consultar archivos http://www.munihuachipa.gob.pe/images/Documentos_Gestion/
  mounted() {
    console.log('Capturando archivos de carpeta| Fetching files on directory');
  },
  data: () => ({
      title: 'Ultimos Documentos',
      files: [
        { path: 'http://www.munihuachipa.gob.pe/images/Documentos_Gestion/autoridades_cpsmh.pdf', name: 'RESOLUCION N°217-2018' },
        { path: '#', name: 'DocumentosGestion2' },
        { path: '#', name: 'DocumentosGestion3' },
        { path: '#', name: 'DocumentosGestion4' },
        { path: '#', name: 'DocumentosGestion5' }
      ]
  }),
}
</script>
<style>


</style>
