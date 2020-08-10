import Vue from "vue"
import VueRouter from 'vue-router'
// import navbar from '../src/components/nav-bar.vue'

Vue.use(VueRouter);

const routes = [{
	// path: "/",
	// name: "navbar",
	// component: navbar
}];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
