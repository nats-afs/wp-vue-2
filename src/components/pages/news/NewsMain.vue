<template>
  <section id="noticias">
    <div class="container">
      <div class="row noticias-wrapper">
        <div class="col s12 m8">
          <div class="news-main">
            <h1>Noticias</h1>
            <p>Informate de lo sucedido en tu distrito</p>
            <router-view></router-view>
          </div>
        </div>
        <div class="col s12 m4">
          <div class="news-sidebar">
            <div class="featured-post">
              <div class="col s12">
                <h5>Noticia Destacada</h5>
                <newitem :newitem="featuredPost"></newitem>
              </div>
            </div>
            <div class="news-list">
              <div class="col s12">
                <h5>Ultimas Noticias</h5>
                <div v-if=load class="container">
                  <div class="row">
                    <div class="col s12">
                      <div class="valign-wrapper">
                        <preloader></preloader>
                      </div>
                    </div>
                  </div>
                </div>
                <template v-else>
                  <noticiaitem v-for="noticia in news" :key="noticia.id" :noticia="noticia"></noticiaitem>
                </template>
                <div class="container more">
                  <div class="center-align">
                    <a href="#" class="btn-flat">Mas
                      <i class="material-icons">more_horiz</i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import noticiaitem from "./NoticiaItem.vue";
import preloader from "@/components/util/PreLoader.vue";
import newitem from "@/components//util/NewItem.vue";
import { newsRef } from "@/config/firebaseConfig";
export default {
  components: {
    newitem,
    noticiaitem,
    preloader
  },
  data: () => ({
    featuredPost: {
      title: null,
      imgPath: null,
      description: null,
      uid: null,
      linkText: "Enlace 1",
      actionLink1: "#",
      actionLink2: "#",
      actionLinkText1: "Accion 1",
      actionLinkText2: "Accion 2"
    },
    load: false,
    news: []
  }),
  created() {
    this.load = true
    newsRef.limitToLast(5).on("value", snapshot => {
      this.addNews(snapshot.val());
      this.load = false
    });
    newsRef
      .orderByChild("featured")
      .equalTo(true)
      .limitToLast(1)
      .on("child_added", data => this.loadFeatured(data.key, data.val()));
    newsRef
      .orderByChild("featured")
      .equalTo(true)
      .limitToLast(1)
      .on("child_changed", data => this.loadFeatured(data.key, data.val()));
  },
  methods: {
    loadFeatured(uid, news) {
      // this.load = true
      this.featuredPost.title = news.title;
      this.featuredPost.imgPath = news.image;
      this.featuredPost.description = news.description;
      this.featuredPost.uid = uid;
    },
    addNews(data) {
      this.news = [];
      for (let key in data) {
        this.news.push({
          uid: key,
          title: data[key].title,
          category: data[key].category,
          date: data[key].date,
          image: data[key].image,
          description: data[key].description
        });
      }
      this.news.reverse();
      // this.news.push({
      //   uid: id,
      //   title: data.title,
      //   category: data.category,
      //   date: data.date,
      //   image: data.image,
      //   description: data.description
      // });
    }
  }
};
</script>
<style lang="scss" scoped>
#noticias {
  margin: 1.5em auto;
  .noticias-wrapper {
    // display: grid;
    grid-gap: 2em;
    grid-template-columns: 2fr 1fr;
  }
  .card-content,
  .card-action {
    padding: 12px;
  }
}
h5 {
  margin: 2em auto;
}
img {
  height: 150px !important;
  width: 150px !important;
}
.news-list {
  h5.news-title {
    margin: 0 auto;
    font-size: 12pt;
    font-weight: 300;
  }
}
.more {
  margin: 3em auto;
  i {
    vertical-align: middle;
  }
}
@media only screen and (max-width: 992px) {
  #noticias {
    margin: 1.5em auto;
    .noticias-wrapper {
      display: grid;
      grid-gap: 1em;
      grid-template-columns: 1fr;
    }
  }
}
</style>