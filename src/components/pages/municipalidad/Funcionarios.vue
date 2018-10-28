<template>
  <div class="">
    <h5>Funcionarios</h5>
    <div class="divider"></div>
    <div class="content">
      <div v-for="i in 22" :key=i class="row">
        <div class="col s4">
          <img src="@/assets/img/funcionario.jpg" alt="" class="responsive-img">
        </div>
        <div class="col s8">
          <h5>Funcionario {{i}}</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quibusdam atque consequuntur incidunt consequatur, suscipit, assumenda perspiciatis omnis laboriosam deleniti, quaerat et. Dolor quaerat, harum nostrum quia accusamus commodi eius?</p>
          <p>Blanditiis perferendis ipsum laboriosam unde velit optio sint similique. Optio libero cumque distinctio iure. Accusamus ab ratione deserunt maxime assumenda incidunt, illum perspiciatis et. Sunt earum corrupti voluptatum dicta quisquam.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.content {
  margin: 3em 0;
  .row {
    margin: 3em 0;
  }
}
</style>


