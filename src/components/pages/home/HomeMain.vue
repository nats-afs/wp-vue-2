<template>
    <section>
      <news></news>
      <notes></notes>
      <events></events>
      <media></media> 
    </section>
</template>

<script>
import news from './hNews/HomeNews'
import notes from './hNotes/HomeNotes'
import media from './hMedia/HomeMedia.vue'
import events from './hEvents/HomeEvents'
export default {
  components: {
    news,
    media,
    events,
    notes},
  data () {
    return {

    }
  }
}
</script>

<style>
/*#myapp{
  background:#212531;
  background: linear-gradient(to right bottom, #2f3441 50%, #212531 50%)
}*/
</style>