<template>
	<div>
		<a :href="fancy.bigPath"
		  :data-fancybox="fancy.group"
		  :data-caption="fancy.caption"><img :src="fancy.smallPath"
			  :alt="fancy.caption"
			  class="responsive-img"></a>
	</div>
</template>

<script>
export default {
  props: ["fancy"]
};
</script>

<style>

</style>