<template>
	<div class="hello">
		<van-row class="m-header">
			<van-col span="24">
				<van-icon name="arrow-left" class="m-header-icon" />
				　 <p>nihao</p>
				</van-col>
		</van-row>
	</div>
</template>
<script>
	export default {

	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.van-nav-bar {
		background-size: 100% 100%;
		width: 100%;
		position: fixed;
		z-index: 999;
		top: 0
	}

	.van-nav-bar__title {
		color: #fff;
	}

	.van-icon-arrow-left:before {
		content: "\F008";
		color: #fff;
	}

	.van-icon-user-o:before {
		content: "\F0CC";
		color: #fff;
		font-size: 0.6rem;
	}
</style>
