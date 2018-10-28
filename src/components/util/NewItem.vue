<template>
  <div class="col s12">
    <div class="card sticky-action hoverable">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" :src="newitem.imgPath">
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">{{newitem.title}}
          <i class="material-icons right">more_vert</i>
        </span>
        <!-- <p>
          <a :href="newitem.link">{{newitem.linkText}}</a>
        </p> -->
      </div>
      <div class="card-action">
        <router-link :to="{ name: 'news-detail', params: {uid: newitem.uid}}">Leer mas</router-link>
        <!-- <a :href="newitem.actionLink2">{{newitem.actionLinkText2}}</a> -->
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">{{newitem.title}}
          <i class="material-icons right">close</i>
        </span>
        <p>{{newitem.description}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["newitem"],
  data: () => ({})
};
</script>
<style lang="scss" scoped>
.card.sticky-action  {
  img{
    height: 200px;
  }
  .card-content{
    height: 150px;
  }
  .card-reveal {
    p {
      font-size: 14px;
      font-weight: normal;
      color: rgba(0, 0, 0, 0.71);
    }
  }
}
</style>