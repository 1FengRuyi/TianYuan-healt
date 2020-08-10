<template>
	<van-tabbar v-model="active" class="active_tab">
		<van-tabbar-item v-for="(item,index) in tabbars" :key="index" @click="tab(index,item.name)">
			<span :class="currIndex == index ? active:''">{{item.title}}</span>
			<template slot="icon" slot-scope="props">
				<img :src="props.active ? item.active : item.normal">
			</template>
		</van-tabbar-item>
	</van-tabbar>
</template>

<script>
	export default {
		name: "nav-bar",
		data() {
			return {
				currIndex: 0,
				active: 0,
				tabbars: [{
						name: "home",
						title: "首页",
						normal: require("@/assets/tab_home.png"),
						active: require("@/assets/tab_home_active.png")
					},
					{
						name: "category",
						title: "分类",
						normal: require("@/assets/tab_home.png"),
						active: require("@/assets/tab_home_active.png")
					},
					{
						name: "message",
						title: "消息",
						normal: require("@/assets/tab_home.png"),
						active: require("@/assets/tab_home_active.png")
					}
				]
			};
		},
		methods: {
			tab(index, val) {
				this.currIndex = index;
				this.$router.push(val);
			}
		}
	};
</script>
