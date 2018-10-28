<template>
  <div class="carousel-events row valign-wrapper">
    <div class="col s12 events-content">
      <div class="row">
        <div v-if=load
          class="container">
          <div class="row">
            <div class="col s12">
              <div class="valign-wrapper">
                <preloader></preloader>
              </div>
            </div>
          </div>
        </div>
        <carousel v-else
          :perPageCustom=perPage
          :paginationEnabled=paginationEnabled
          :autoplayHoverPause=hover
          :navigationEnabled=navigation
          :navigationNextLabel=next
          :navigationPrevLabel=prev
          :autoplay=play
          :loop=play>
          <slide v-for="(event, index) in events"
            :key="event.id">
            <eventitem class="col s12"
              :event="event"
              :index="index"></eventitem>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
import { eventRef } from "@/config/firebaseConfig";
import eventitem from "@/components/util/EventItem.vue";
import debounce from "@/components/util/debounce";
import preloader from "@/components/util/Preloader.vue";
export default {
  components: {
    eventitem,
    Carousel,
    Slide,
    preloader
  },
  data: () => ({
    events: [],
    perPage: [[360, 1], [768, 2], [1024, 4]],
    paginationEnabled: false,
    play: true,
    hover: true,
    navigation: true,
    prev: '<i class="material-icons">arrow_back</i>',
    next: '<i class="material-icons">arrow_forward</i>',
    browserWidth: null,
    load: false
  }),
  created: function() {
    this.load = true;
    eventRef.limitToLast(8).on("value", snapshot => {
      this.addEvents(snapshot.val());
      this.load = false;
    });
  },
  watch: {
    browserWidth: function() {
      if (this.browserWidth <= 768) {
        this.navigation = false;
        this.play = false;
      } else {
        this.navigation = true;
        this.play = true;
      }
    }
  },
  mounted() {
    window.addEventListener(
      "resize",
      debounce(this.onResize, this.refreshRate)
    );
    this.getBrowserWidth();
  },
  methods: {
    getBrowserWidth() {
      this.browserWidth = window.innerWidth;
      return this.browserWidth;
    },
    onResize() {
      this.getBrowserWidth();
    },
    addEvents(data) {
      this.events = [];
      this.load = true;
      for (let key in data) {
        this.events.push({
          uid: key,
          title: data[key].title,
          description: data[key].description,
          dateInit: data[key].dateInit,
          createAt: data[key].createAt,
          image: data[key].imageValue
        });
      }
      this.events.reverse();
    }
  }
};
</script>
<style lang="scss" scoped>
.carousel-events {
  margin-top: 3em;
}
</style>
