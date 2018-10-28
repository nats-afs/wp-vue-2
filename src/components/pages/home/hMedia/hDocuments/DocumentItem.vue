<template>
	<div>
		<div class="row valign-wrapper">
			<a :href="file.path"
			  target="_blank">
				<i class="fa fa-file-pdf-o"></i> {{file.name}}</a>
		</div>
	</div>
</template>

<script>
export default {
  props: ["file"]
};
</script>

<style>

</style>