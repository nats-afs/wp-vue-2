<template>
	  <div class="row">
  	  <div class="parallax-container">
    	  <div class="parallax" :style="{backgroundImage:imagen}"></div>
    	</div>
	  </div>  
</template>
<script>
export default {
  props: ["imgPath"],
  data() {
    return {};
  },
  computed: {
    imagen() {
      return "url(" + this.imgPath + ")";
    }
  }
};
</script>
<style lang="scss" scoped>
.parallax-container {
  position: relative;
  .parallax {
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 600px;
  }
}
//@media only screen and (max-width: 992px) {
//  .row{
 //   display:none;
  //}
//}
</style>
