<template>
  <div class="col s12 m8 l8 news-content">
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
        <slide v-for="newitem in news"
          :key="newitem.id">
          <newitem :newitem="newitem"></newitem>
        </slide>
      </carousel>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
import { newsRef } from "@/config/firebaseConfig";
import newitem from "@/components/util/NewItem.vue";
import debounce from "@/components/util/debounce";
import preloader from "@/components/util/Preloader.vue";
export default {
  components: {
    newitem,
    Carousel,
    Slide,
    preloader
  },
  data: () => ({
    news: [],
    perPage: [[360, 1], [768, 2], [1024, 3]],
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
    newsRef.limitToLast(10).on("value", snapshot => {
      this.addNews(snapshot.val());
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
    addNews(data) {
      this.news = [];
      this.load = true;
      for (let key in data) {
        this.news.push({
          uid: key,
          title: data[key].title,
          category: data[key].category,
          date: data[key].date,
          imgPath: data[key].image,
          description: data[key].description
        });
      }
      this.news.reverse();
    }
  }
};
</script>
<style lang="scss" scoped>
// .news-content {
//   height: inherit !important;
// }
</style>