import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		redirect: "/home",
	},
	{
		path: "/",
		name: "AppMenu",
		component: () => import("../components/AppMenu.vue"),
		children: [
			{
				path: "/home",
				name: "Home",
				component: () => import("../views/HomeView.vue"),
			},
			{
				path: "/adopta",
				name: "Adopta",
				component: () => import("../views/AdoptaView.vue"),
			},
			{
				path: "/voluntariado",
				name: "Voluntariado",
				component: () => import("../views/VoluntariadoView.vue"),
			},
			{
				path: "/donaciones",
				name: "Donaciones",
				component: () => import("../views/DonacionesView.vue"),
			},
			{
				path: "/sobre-nosotros",
				name: "Sobre Nosotros",
				component: () => import("../views/SobreNosotrosView.vue"),
			},
			{
				path: "/contactanos",
				name: "Contactanos",
				component: () => import("../views/ContactanosView.vue"),
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
