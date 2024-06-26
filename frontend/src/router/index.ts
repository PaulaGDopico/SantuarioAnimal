import {isAuthenticated} from "@/middleware/checkLogin";
import {createRouter, createWebHistory} from "@ionic/vue-router";
import {RouteRecordRaw} from "vue-router";

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
				path: "/animal/:animal_id",
				name: "Animal",
				component: () => import("../views/InfoAnimalView.vue"),
			},
			{
				path: "/info-adopta",
				name: "InfoAdopta",
				component: () => import("../views/InfoAnimalView.vue"),
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
			{
				path: "/iniciosesion",
				name: "InicioSesion",
				component: () => import("../views/InicioSesion.vue"),
			},
            {
                path: "/donaciones-solidarias",
                name: "DonacionesSolidarias",
                component: () => import("../views/DonacionSolidaria.vue"),
            },
            {
                path: "/donaciones-solidarias/:donacion_id",
                name: "DonacionesSolidariasInfo",
                component: () => import("../views/DonacionSolidariaInfo.vue"),
            },
		],
	},

    {
        path: "/admin",
        name: "AppAdminMenu",
        component: () => import("../components/AppAdminMenu.vue"),
        children: [
            {
                path: "/gestion",
                name: "gestion",
                meta: {requiresAuth: true},
                component: () => import("../views/GestionTrabajadorView.vue"),
            },
            {
                path: "/gestionAnimales",
                name: "gestionAnimales",
                meta: {requiresAuth: true},
                component: () => import("../views/GestionarAnimales.vue"),
            },
            {
                path: "/gestionDonaciones",
                name: "gestionDonaciones",
                meta: {requiresAuth: true},
                component: () => import("../views/GestionarDonaciones.vue"),
            },
            {
                path: "/gestionNotificaciones",
                name: "gestionNotificaciones",
                meta: {requiresAuth: true},
                component: () =>
                    import("../views/GestionNotificacionesView.vue"),
            },
            {
                path: "/registrarAdministradores",
                name: "registrarAdministradores",
                meta: {requiresAuth: true},
                component: () =>
                    import("../views/RegistrarAdministradorView.vue"),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

//Comprovar autentificación en páginas que lo requieran
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !isAuthenticated()) {
        next("/iniciosesion");
    } else {
        next();
    }
});

export default router;
