<template>
  <section id="news">
    <div class="container news-wrapper">
      <div class="row valign-wrapper">
        <div class="col s12 m4 l4 news-title">
          <div class="">
            <h2>{{title}}</h2>
            <p class="flow-text">{{description}}</p>
            <router-link to='/news' class="btn-flat">Leer mas
              <i class="material-icons">more_horiz</i>
            </router-link>
          </div>
        </div>
        <carouselnews></carouselnews>
      </div>
    </div>
  </section>
</template>
<script>
import carouselnews from "./CarouselNews.vue";
export default {
  components: {
    carouselnews
  },
  data: () => ({
    title: "Ultimas Noticias",
    description: "Informese sobre las nuevas noticias de su ciudad"
    // news: []
  })
};
</script>
<style <style lang="scss" scoped>

</style>
