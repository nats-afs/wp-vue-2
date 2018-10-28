<template>
	<div class="col s12 m4 l4 galeria">
		<div class="row"
		  v-if="gallery.length">
			<div class="container">
				<h4>{{title}}</h4>
				<div class="">
					<template v-for="picture in gallery">
						<div class="col s6 picture-box">
							<img class="responsive-img"
							  :src="picture.src"
							  :alt="picture.caption"
							  @click="openGallery">
						</div>
					</template>
				</div>
				<lightbox :images="gallery"
				  ref="lightbox"
				  :show-caption="true"
				  :showLightBox="false"></lightbox>
			</div>
		</div>
		<div class="center-align">
			<router-link to="gallery"
			  class="waves-effect btn-flat">{{moreText}}
				<i class="material-icons">more_horiz</i>
				</a>
			</router-link>
		</div>
	</div>
</template>
<script>
import { galleryRef } from "@/config/firebaseConfig";
import Lightbox from "vue-image-lightbox";
require("vue-image-lightbox/dist/vue-image-lightbox.min.css");
import groupgallery from "./GroupGallery.vue";
export default {
  components: {
    groupgallery,
    Lightbox
  },
  data: () => ({
    title: "Ultimas Fotos",
    moreText: "Mas",
    gallery: []
  }),
  created() {
    galleryRef
      .limitToLast(8)
      .orderByChild("group")
      .on("value", snapshot => {
        this.setPictures(snapshot.val());
      });
  },
  methods: {
    setPictures(data) {
      this.gallery = [];
      for (let key in data) {
        this.gallery.push({
          caption: data[key].caption,
          group: data[key].group,
          src: data[key].src,
          thumb: data[key].thumb
        });
      }
    },
    openGallery() {
      this.$refs.lightbox.showImage(1);
    }
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
.picture-box {
  padding: 0 0.15em !important;
  width: inherit;
}
img.responsive-img {
  height: 90px;
  width: 100%;
}
i {
  vertical-align: middle;
}
</style>
