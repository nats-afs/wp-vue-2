<template>
  <article>
    <h4>{{place.title}}</h4>
    <small>{{place.dateInit}}</small>
    <img class="responsive-img" :src="place.image" alt="">
    <p>{{place.description}}</p>
    <ul>
        <li 
          v-for="(image, index) in place.gallery" 
          style="display: inline-block"
        >
          <img 
            v-lazy="image.src" 
            style="height: 100px" 
            @click="openGallery(index)"
          >
        </li>
    </ul>
    <lightbox :images="place.gallery" ref="lightbox" :show-caption="true" :showLightBox="false"></lightbox>
  </article>
</template>
<script>
import Lightbox from 'vue-image-lightbox'
import { placeRef } from "@/config/firebaseConfig"
require('vue-image-lightbox/dist/vue-image-lightbox.min.css')
export default {
  components:{
    Lightbox
  },
  props: ["uid"],
  data:()=> ({
    place : {
      title: null,
      dateInit: null,
      image :null,
      description: null,
      gallery: []
    }
  }),
  created() {
    this.setPlace();
  },
  watch: {
    uid: 'setPlace'
  },
  methods: {
    setPlace() {
      placeRef.child(this.uid).on("value", snapshot => {
        console.log(snapshot.val().title)
        this.place.title = snapshot.val().title;
        this.place.address = snapshot.val().address;
        this.place.image = snapshot.val().imageValue;
        this.place.description = snapshot.val().description;
        this.place.gallery = snapshot.val().gallery? snapshot.val().gallery.slice(): []; 
      });
    },
    openGallery(index) {
      this.$refs.lightbox.showImage(index)
    }
  }
};
</script>
<style lang="scss" scoped>
img {
  margin: 1em auto;
  padding: 1em;
}
</style>
