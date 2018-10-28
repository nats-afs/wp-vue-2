<template>
  <div id="eventos">
    <div class="container">
    	<h1>Lugares</h1>
    	<div class="divider"></div>
      <div class="row">
        <div class="events-content">
        	<div class="row">
        		<div class="col s8">
		        	<router-view></router-view>
        		</div>
        		<div class="col s4 side-events" >
			        <div v-if=load class="container">
			          <div class="row">
			            <div class="col s12">
			              <div class="valign-wrapper">
			                <preloader></preloader>
			              </div>
			            </div>
			          </div>
			        </div>
		        	<template v-for="(place, index) in places">
			        	<placeitem class="col s12" :place="place" :index="index"></placeitem>
		        	</template>
        		</div>
        	</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { placeRef } from "@/config/firebaseConfig";
import placeitem from "@/components//util/PlaceItem.vue";
import preloader from "@/components//util/Preloader.vue";
export default {
  components: {
    placeitem,
    preloader
  },
  data: () =>({
    	places: [],
    	load: false
    }),
  created: function() {
    this.load = true;
    placeRef.limitToLast(8).on("value", snapshot => {
      this.addPlaces(snapshot.val());
      this.load = false;
    });
  },
  methods: {
    getBrowserWidth() {
      this.browserWidth = window.innerWidth;
      return this.browserWidth;
    },
    addPlaces(data) {
      this.places = []
      this.load = false;
      for (let key in data) {
        this.places.push({
          uid: key,
          title: data[key].title,
          description: data[key].description,
          dateInit: data[key].dateInit,
          createAt: data[key].createAt,
          image: data[key].imageValue,
          pictures: data[key].gallery? data[key].gallery.length : null
        });
      }
      this.places.reverse();
    }
  }
}

</script>
<style lang="scss" scoped>
.side-events{
	padding: 2em;
}	
</style>
