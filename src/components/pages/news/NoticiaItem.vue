<template>
  <div class="card horizontal small hoverable">
    <div class="card-image">
      <img :src="noticia.image">
    </div>
    <div class="card-stacked">
      <div class="card-content">
        <h6 class="news-title">{{noticia.title}}</h6>
        <div class="divider"></div>
        <router-link :to="{name:'news-detail', params: {uid: noticia.uid}}">{{noticia.category}}</router-link>
        <div class="divider"></div>
        <small>{{noticia.date}}</small>
      </div>
      <div class="card-action">
        <router-link :to="{ name: 'news-detail', params: {uid: noticia.uid}}">Leer mas</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:['noticia'],
  data() {
    return {
      // noticia:null
    };
  }
};
</script>
<style lang="scss" scoped>
  .small{
    height: 180px;
  }
</style>

