<template>
  <div id="app-wrapper" v-if="show">
    <ownheader></ownheader>
    <ownnav></ownnav>
    <main>
      <router-view></router-view>
    </main>
    <ownfooter></ownfooter>
  </div>
  <notfound v-else></notfound>
</template>
<script>
import {mapActions} from 'vuex'

import ownheader from "./components/layout/header/OwnHeader.vue";
import ownnav from "./components/layout/nav/OwnNav.vue";
import ownfooter from "./components/layout/footer/OwnFooter.vue";
import notfound from './components/NotFound.vue'
export default {
  components: {
    ownheader,
    ownnav,
    ownfooter,
    notfound
  },
  data:()=>({
    show:true
  }),
  created(){
    this.fetchOrg()
  },
  methods: mapActions(['fetchOrg'])
};
</script>
<style>

</style>
