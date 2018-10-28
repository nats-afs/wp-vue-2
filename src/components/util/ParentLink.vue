<template>
  <li>
    <a :data-activates="setId"
      data-beloworigin="true"
      class="dropdown-button">
      <slot></slot> {{link.name}}
      <slot name="arrow"></slot>
    </a>
    <ul :id="setId"
      class="dropdown-content">
      <rootlink v-for="link in link.children"
        :link="link"
        :key="link.id"></rootlink>
    </ul>
  </li>
</template>
<script>
import rootlink from "./RootLink.vue";
export default {
  components: {
    rootlink
  },
  props: {
    link: {
      required: true
    },
    movil: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data: () => ({}),
  computed: {
    setId() {
      return !this.movil ? this.link.ref + "-m" : this.link.ref;
    }
  }
};
</script>
<style>

</style>
