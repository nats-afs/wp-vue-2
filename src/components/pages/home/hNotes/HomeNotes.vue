<template>
  <section id="notes">
    <parallaxnote :imgPath="imgPath"></parallaxnote>
    <div class="container">
      <div class="card hoverable notes-wrapper">
        <div class="row">
          <groupnote v-for="note in notes" :note="note" :key="note.id"></groupnote>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import parallaxnote from '@/components/util/ParallaxNote.vue'
import groupnote from "./GroupNote.vue";
import {noteRef} from "@/config/firebaseConfig.js"
export default {
  components: {
    groupnote,
    parallaxnote
  },
  data:() => ({
    imgPath: '/src/assets/img/mirador.png',
    notes:[],
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
    noteRef.limitToLast(4).on("value", snapshot => {
      this.addNotes(snapshot.val());
      this.load = false;
    });
  },
  methods: {
    addNotes(data) {
      this.notes = []
      this.load = true;
      for (let key in data) {
        this.notes.push({
          uid: key,
          title: data[key].name,
          smallDescription: data[key].description,
          items: data[key].children
        });
      }
      this.notes.reverse();
    }
  }
};
</script>
