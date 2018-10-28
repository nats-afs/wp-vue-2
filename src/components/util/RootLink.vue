<template>
  <li>
    <router-link :to="link.path"><slot></slot> {{link.name}}</router-link>
  </li>  
</template>

<script>
export default {
	props:['link']
}
</script>

<style>
</style>