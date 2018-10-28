<template>
  <header>
    <headerBackground></headerBackground>
    <headerNavbar></headerNavbar>
  </header>
</template>
<script>
import headerBackground from "./HeaderBackground.vue";
import headerNavbar from "./HeaderNavbar.vue";
export default {
  components: {
    headerBackground,
    headerNavbar
  },
  data: () => ({})
};
</script>
<style lang="scss">

</style>
