<template>
  <div class="">
    <div class="card small sticky-action hoverable">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator"
          :src="event.image">
        <span class="card-title activator">{{event.title}}
          <br>
          <small>{{event.dateInit}}</small>
          <br>
          <small v-if="event.pictures"
            class="valign-wrapper">
            <i class="material-icons">camera_alt</i>{{event.pictures}} imagenes</small>
        </span>
      </div>
      <div class="card-reveal"
        :class="{'blue': isPar}">
        <span class="card-title">{{event.title}}
          <br>
          <small class="valign-wrapper">
            <i class="material-icons">date_range</i> {{event.dateInit}}</small>
          <i class="material-icons right">close</i>
          <small v-if="event.pictures"
            class="valign-wrapper">
            <i class="material-icons">camera_alt</i>{{event.pictures}} imagenes</small>
        </span>
        <p>{{miniDescription}}</p>
        <div class="card-action">
          <router-link :to="{name: 'event-detail', params: {uid: event.uid}}">Ver mas ...</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["event", "index"],
  data: () => ({}),
  computed: {
    isPar() {
      return this.index % 2 ? true : false;
    },
    miniDescription() {
      return this.event.description.length > 100
        ? this.event.description.substr(0, 100) + " ..."
        : this.event.description;
    }
  }
};
</script>
<style lang="scss" scoped>
small {
  i {
    padding: 0.25em;
  }
}
</style>