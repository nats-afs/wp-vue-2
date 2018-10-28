<template>
  <div id="eventos">
    <div class="container">
    	<h1>Eventos</h1>
    	<div class="divider"></div>
      <div class="row">
        <div class="events-content">
        	<div class="row">
        		<div class="col s12 m8">
		        	<router-view></router-view>
        		</div>
        		<div class="col s12 m4 side-events" >
			        <div v-if=load class="container">
			          <div class="row">
			            <div class="col s12">
			              <div class="valign-wrapper">
			                <preloader></preloader>
			              </div>
			            </div>
			          </div>
			        </div>
		        	<template v-for="(event, index) in events">
			        	<eventitem class="col s12" :event="event" :index="index"></eventitem>
		        	</template>
        		</div>
        	</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { eventRef } from "@/config/firebaseConfig";
import eventitem from "@/components/util/EventItem.vue";
import preloader from "@/components/util/Preloader.vue";
export default {
  components: {
    eventitem,
    preloader
  },
  data: () =>({
    	events: [],
    	load: false
    }),
    created: function() {
    this.load = true;
    eventRef.limitToLast(8).on("value", snapshot => {
      this.addEvents(snapshot.val());
      this.load = false;
    });
  },
  methods: {
    getBrowserWidth() {
      this.browserWidth = window.innerWidth;
      return this.browserWidth;
    },
    addEvents(data) {
      this.events = []
      this.load = false;
      for (let key in data) {
        this.events.push({
          uid: key,
          title: data[key].title,
          description: data[key].description,
          dateInit: data[key].dateInit,
          createAt: data[key].createAt,
          image: data[key].imageValue,
          pictures: data[key].gallery? data[key].gallery.length : null
        });
      }
      this.events.reverse();
    }
  }
}

</script>
<style lang="scss" scoped>
.side-events{
	padding: 2em;
}	
</style>
