//Define our routing rules
import { createRouter, createWebHistory } from "vue-router";
import HelloView from "../components/HelloView.vue"
import AboutView from "../components/AboutView.vue"
import CarView from "../components/CarView.vue"
import ContactView from "../components/ContactView.vue"


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HelloView
        },
        {
            path:"/about",
            name:"about",
            component: AboutView
        },
        {
            path:"/cars/:id",
            name:"car",
            component:CarView,
            children:[
                {
                    path:"contact",
                    component:ContactView
                }
            ]
        }
    ]
});

export default router



