<template>
	<a :href="red.url" :alt="red.name" target="_blank"><i :class="red.icon" aria-hidden="true"></i></a>
</template>

<script>
export default {
	props: ['red']
}
</script>

<style>
</style>