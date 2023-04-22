import { createRouter, createWebHashHistory } from "vue-router";

let routes = [
    {   
        path: "/", component: () => import("../views/Topbar.vue"), children: [
            { path: "/homepage", component: () => import("../views/Homepage.vue") },
            { path: "/classify", component: () => import("../views/Classify.vue") },
            { path: "/ranking", component: () => import("../views/Ranking.vue") },
            { path: "/community", component: () => import("../views/Community.vue") },

            { path: "/detail", component: () => import("../views/Detail.vue")} ,
        ] 
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export { router, routes }