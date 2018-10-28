<template>
  <section id="events">
    <div class="container events-wrapper">
      <h1 class="center-align">{{title}}</h1>
      <carouselevents></carouselevents>
      <div class="container">
        <div class="center-align">
          <router-link to="events"
            class="waves-effect btn-flat">{{moreText}}
            <i class="material-icons">more_horiz</i>
            </a>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import carouselevents from "./CarouselEvents.vue";
export default {
  components: {
    carouselevents
  },
  data() {
    return {
      title: "Eventos",
      moreText: "Ver mas",
      moreLink: "#"
    };
  }
};
</script>
<style lang="scss" scoped>
#events {
  margin-top: 12em;
}
@media only screen and (max-width: 992px) {
  #events {
    margin-top: 2em;
  }
}
</style>
