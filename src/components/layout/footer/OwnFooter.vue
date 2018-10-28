<template>
  <footer class="page-footer">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">{{getTitle}}</h5>
          <p class="slogan">{{getSlogan}}</p>
          <h5>{{getAlcalde}}</h5>
          <span class="flow-text">Alcalde</span>
          <br>
          <iconlink v-for="red in getRedesSociales"
            v-if="red.state"
            :red="red"
            :key="red.id"></iconlink>
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">{{interestingLinks.title}}</h5>
          <ul>
            <rootlink v-for="link in interestingLinks.links"
              :link="link"
              :key="link.id"></rootlink>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">{{getCopyright}}
        <a class="grey-text text-lighten-4 right"
          href="#!">Mas Enlaces</a>
      </div>
    </div>
  </footer>
</template>
<script>
import rootlink from "../../util/RootLink.vue";
import iconlink from "../../util/IconLink.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    rootlink,
    iconlink
  },
  data: () => ({
    interestingLinks: {
      title: "Enlaces de interes",
      links: [
        { name: "Enlace 1", path: "#" },
        { name: "Enlace 2", path: "#" },
        { name: "Enlace 3", path: "#" },
        { name: "Enlace 4", path: "#" }
      ]
    }
  }),
  computed: mapGetters([
    "getTitle",
    "getSlogan",
    "getCopyright",
    "getRedesSociales",
    "getAlcalde"
  ])
};
</script>
<style lang="scss" scoped>
p.slogan {
  margin: 0;
}
span.flow-text {
  margin: 0;
}
</style>

