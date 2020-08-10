<template>
	<div id="app">
		<NavBar></NavBar>
		<User></User>
		<router-view></router-view>
	</div>
</template>

<script>
	import NavBar from './components/nav-bar.vue';
	import User from './components/user.vue';

	export default {
		name: 'App',
		components: {
			NavBar: NavBar,
			User: User
		}
	}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		/* margin-top: 60px; */
	}
</style>
