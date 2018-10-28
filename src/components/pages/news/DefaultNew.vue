<template>
  <article>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea corrupti nesciunt, officia sit odio dolorum tempore aperiam ratione magnam nihil dolore labore quibusdam beatae. Culpa quaerat quo tempora ipsa! Exercitationem.</p>
    <p>Necessitatibus non quia possimus, dicta facere illo labore, aspernatur, error voluptatem nobis inventore atque voluptatibus est ipsam ipsa beatae commodi maiores unde. Id dolor veniam excepturi cum rerum suscipit iure!</p>
    <p>Dolor rerum asperiores perspiciatis corrupti culpa perferendis, dolores id? Nulla quibusdam repudiandae, aspernatur voluptatibus tempora minima inventore dolorem aut ea! Inventore, molestias? Animi reiciendis eos et perferendis nobis eveniet tempore.</p>
  </article>
</template>
<script>
import { newsRef } from "@/config/firebaseConfig";
export default {
  data() {
    return {
      news: null
    }
  }
}
</script>
<style lang="scss" scoped>
img {
  margin: 1em auto;
}
</style>
