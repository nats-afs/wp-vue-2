<template>
  <div class="header-wrapper valign-wrapper">
    <div class="muni-logo">
      <div class="valign-wrapper"><img class="responsive-img"
          :src="getLogo"
          :alt="getTitle + ' ' + getSlogan"></div>
      <div class="center-align">
        <h4>{{getTitle}}</h4>
        <p class="slogan">{{getSlogan}}</p>
        <h5>{{getAlcalde}}</h5>
        <span class="flow-text">Alcalde</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({}),
  computed: {
    ...mapGetters(["getTitle", "getSlogan", "getLogo", "getAlcalde"])
  }
};
</script>
<style lang="scss" scoped>
p.slogan {
  margin: 0px;
}
h5 {
  margin: 0px;
  font-weight: bold;
}
span {
  font-weight: medium;
}
</style>
