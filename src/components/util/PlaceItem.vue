<template>
  <div class="row">
    <div class="place">
      <router-link :to="{name: 'place-detail', params: {uid: place.uid}}">
        <div class="col s4">
          <img :src="place.image" alt="" class="responsive-img">
        </div>
        <div class="col s8">
          <h5>{{place.title}}</h5>
          <p>{{place.address}}</p><span>{{place.schedule}}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
	props:['place']
}

</script>
<style lang="scss" scoped>
 .place{
  height: 150px !important;
    img{
      height:150px;
    }
    h5,p{
      color: #000;
    }
 }
</style>
