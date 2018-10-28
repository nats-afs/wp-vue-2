<template>
  <div class="col s12 m4 l4 lugares">
    <h4>{{title}}</h4>
    <placeitem v-for="place in places"
      :key="place.id"
      :place="place"></placeitem>
    <div class="center-align">
      <router-link to="places"
        class="waves-effect btn-flat">{{moreText}}
        <i class="material-icons">more_horiz</i>
        </a>
      </router-link>
    </div>
  </div>
</template>

<script>
import { placeRef } from "@/config/firebaseConfig";
import placeitem from "@/components/util/PlaceItem.vue";
export default {
  components: {
    placeitem
  },
  data: () => ({
    title: "Lugares",
    moreText: "Mas",
    places: []
  }),
  mounted() {
    placeRef.limitToLast(3).on("value", snapshot => {
      this.addPlaces(snapshot.val());
    });
  },
  methods: {
    addPlaces(data) {
      this.places = [];
      for (let key in data) {
        this.places.push({
          uid: key,
          title: data[key].title,
          address: data[key].address,
          image: data[key].imageValue
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.linkToPlaces {
  color: #000;
}
i {
  vertical-align: middle;
}
</style>