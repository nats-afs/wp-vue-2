<template>
  <div class="container header-bottom valign-wrapper hide-on-med-and-down">
    <nav>
      <div class="nav-wrapper">
        <ul class="left">
          <template v-for="link in getLinksHeader">
            <parentlink v-if="link.children" :link="link" :key="link.id">
              <i v-if="link.icon" :class="link.icon"></i>
              <template name="arrow"><i class="material-icons right">arrow_drop_down</i></template>
            </parentlink>
            <rootlink v-else :link="link" :key="link.id"><i v-if="link.icon" :class="link.icon"></i></rootlink>
          </template>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
import rootlink from "@/components/util/RootLink.vue";
import parentlink from "@/components/util/ParentLink.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    rootlink,
    parentlink
  },
  data() {
    return {};
  },
  computed: mapGetters(["getLinksHeader"])
};
</script>
<style>

</style>
