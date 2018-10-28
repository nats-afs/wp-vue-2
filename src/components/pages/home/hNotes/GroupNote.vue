<template>
  <div class="col s12 m3 l3">
    <div class="container">
      <h5>{{note.title}}</h5>
      <p class="flow-text">{{note.smallDescription}}</p>
      <ul>
        <!-- <rootlink v-for="item in note.items" :link="item" :key="item.id"></rootlink> -->
        <a href="#" v-for="item in note.items"> {{item.name}}</a>
      </ul>
    </div>
  </div>
</template>
<script>
import rootlink from '@/components/util/RootLink.vue'
export default {
	components:{
		rootlink
	},
	props:['note']
}

</script>
<style lang="scss" scoped>
a{
  display:block;
}
</style>
