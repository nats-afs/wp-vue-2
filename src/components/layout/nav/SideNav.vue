<template>
  <div>
    <a href="#" data-activates="mobile-sidenav" class="button-collapse valign-wrapper"><i class="material-icons">menu</i> Menu</a>
    <ul class="side-nav" id="mobile-sidenav">
      <template v-for="link in getLinksNavMovil">
        <parentlink v-if="link.children" :link="link" :key="link.id" :movil=true><i v-if="link.icon" :class="link.icon"></i></parentlink>
        <rootlink v-else :link="link" :key="link.id"><i v-if="link.icon" :class="link.icon"></i></rootlink>
      </template>
      <!-- divider -->
      <li class="divider"></li>
      <!--  -->
      <template v-for="link in getLinksHeaderMovil">
        <parentlink v-if="link.children" :link="link" :key="link.id" :movil=true><i v-if="link.icon" :class="link.icon"></i></parentlink>
        <rootlink v-else :link="link" :key="link.id"><i v-if="link.icon" :class="link.icon"></i></rootlink>
      </template>
    </ul>
  </div>
</template>
<script>
import rootlink from "../../util/RootLink.vue";
import parentlink from "../../util/ParentLink.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    rootlink,
    parentlink
  },
  data() {
    return {};
  },
  computed: mapGetters(["getLinksHeaderMovil", "getLinksNavMovil"])
};
</script>
<style lang="scss" scoped>
// #mobile-sidenav{
//   backgroundImage:url('/src/assets/img/mirador.png');
//   background-attachment: fixed;
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: cover;
//      height: 600px;
// }
</style>
