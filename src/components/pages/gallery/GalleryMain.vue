<template>
	<article>
		<div class="row">
			<div class="container">
				<h4>Galeria</h4>
				<div class="divider"></div>
				<br>
				<template v-for="picture in gallery">
					<div class="col s12 m3 picture-box">
						<img class="responsive-img" :src="picture.src" :alt="picture.caption" @click="openGallery">
					</div>
				</template>
			</div>
		</div>
		<lightbox :images="gallery" ref="lightbox" :show-caption="true" :showLightBox="false"></lightbox>
	</article>
</template>
<script>
import {galleryRef} from "@/config/firebaseConfig"
import Lightbox from 'vue-image-lightbox'
require('vue-image-lightbox/dist/vue-image-lightbox.min.css')

export default {
	components:{
		Lightbox
	},
  data: () => ({
  	gallery: []
  }),
	created() {
		galleryRef.limitToLast(50).orderByChild('group').on('value', snapshot => {
    	this.setPictures(snapshot.val())
    })
	},
  methods: {
		setPictures(data){
			this.gallery = []
			for(let key in data){
				this.gallery.push({
					caption: data[key].caption,
	        group: data[key].group,
	        src: data[key].src,
	        thumb: data[key].thumb
				})
			}
		},
	  openGallery() {
	    this.$refs.lightbox.showImage(1)
	  }
	},
}
</script>

<style lang="scss" scoped>
.picture-box{
	padding: 0 .5em .5em !important;
	width: inherit;
}
img.responsive-img{
	height: 250px;
	width: 100%;
}
i{
  vertical-align:middle;
}
</style>