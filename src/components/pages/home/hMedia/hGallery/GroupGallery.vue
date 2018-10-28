<template>
  <div class="row">
    <div class="col s4">
      <galleryitem v-for="item in gallery.items" :key="item.id" :fancy="item" :class="{hide : !item.main}"></galleryitem>
    </div>
    <div class="col s8">
      <h5>{{gallery.place}}</h5>
      <p>{{gallery.date}}</p><span>{{gallery.items.length}} fotos</span>
    </div>
  </div>
</template>
<script>
import galleryitem from './GalleryItem.vue'
export default {
  props:['gallery'],
  components: {
    galleryitem
  }
}
</script>
<style>

</style>
