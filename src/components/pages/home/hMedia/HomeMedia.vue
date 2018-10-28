<template>
	<section id="media">
    <div class="container">
      <div class="row">
        <places></places>
        <gallery></gallery>
        <documents></documents>
      </div>
    </div>
  </section>
</template>

<script>
import documents from './hDocuments/HomeDocuments.vue'
import gallery from './hGallery/HomeGallery.vue'
import places from './hPlaces/HomePlaces.vue'

export default {
  components: {
    documents,
    gallery,
    places
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>