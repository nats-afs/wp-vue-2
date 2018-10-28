<template>
  <article>
    <h4>{{event.title}}</h4>
    <small>{{event.dateInit}}</small>
    <img class="responsive-img" :src="event.image" alt="">
    <p>{{event.description}}</p>
    <ul>
        <li 
          v-for="(image, index) in event.gallery" 
          style="display: inline-block"
        >
          <img 
            v-lazy="image.src" 
            style="height: 100px" 
            @click="openGallery(index)"
          >
        </li>
    </ul>
    <lightbox :images="event.gallery" ref="lightbox" :show-caption="true" :showLightBox="false"></lightbox>
  </article>
</template>
<script>
import { eventRef } from "@/config/firebaseConfig"
import Lightbox from 'vue-image-lightbox'
require('vue-image-lightbox/dist/vue-image-lightbox.min.css')
export default {
  components:{
    Lightbox
  },
  props: ["uid"],
  data:()=> ({
    event : {
      title: null,
      dateInit: null,
      image :null,
      description: null,
      gallery: []
    }
  }),
  created() {
    this.setEvent();
  },
  watch: {
    uid: 'setEvent'
  },
  methods: {
    setEvent() {
      eventRef.child(this.uid).on("value", snapshot => {
        this.event.title = snapshot.val().title;
        this.event.dateInit = snapshot.val().dateInit;
        this.event.image = snapshot.val().imageValue;
        this.event.description = snapshot.val().description;
        this.event.gallery = snapshot.val().gallery? snapshot.val().gallery.slice(): []; 
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
