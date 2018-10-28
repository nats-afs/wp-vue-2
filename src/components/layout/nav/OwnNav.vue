<template>
  <div id="nav-header">
    <div class="container">
      <nav class="navbar-main">
        <div class="nav-wrapper">
          <sidenav></sidenav>
          <ul class="hide-on-med-and-down">
            <template v-for="link in getLinksNav">
              <parentlink v-if="link.children" :link="link" :key="link.id"><i v-if="link.icon" :class="link.icon"></i></parentlink>
              <rootlink v-else :link="link" :key="link.id"><i v-if="link.icon" :class="link.icon"></i></rootlink>
            </template>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
import rootlink from "../../util/RootLink.vue";
import parentlink from "../../util/ParentLink.vue";
import sidenav from "./SideNav.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    rootlink,
    parentlink,
    sidenav
  },
  data() {
    return {

    }
  },
  computed: mapGetters(['getLinksNav'])
};
</script>
<style lang="scss" scoped>
  
</style>
