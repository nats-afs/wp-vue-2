<template>
  <article>
    <h4>{{news.title}}</h4>
    <small>{{news.date}}</small>
    <img class="responsive-img" :src="news.image" alt="">
    <p>{{news.description}}</p>
  </article>
</template>
<script>
import { newsRef } from "@/config/firebaseConfig";
export default {
  props: ["uid"],
  data() {
    return {
      news: {
        title: null,
        date: null,
        image: null,
        category: null,
        description: null
      }
    };
  },
  created() {
    this.setNews();
  },
  watch: {
    uid: 'setNews'
  },
  methods: {
    setNews() {
      newsRef.child(this.uid).on("value", snapshot => {
        this.news.title = snapshot.val().title;
        this.news.category = snapshot.val().category;
        this.news.date = snapshot.val().date;
        this.news.image = snapshot.val().image;
        this.news.description = snapshot.val().description;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
img {
  margin: 1em auto;
}
</style>
