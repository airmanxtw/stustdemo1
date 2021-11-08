
import Vue from "vue";
import VueRouter from "vue-router";
import home from "./components/home.vue";
import a1 from "./components/exams/dropdown/anwser.vue";
import a2 from "./components/news.vue";
import a3 from "./components/mu.vue";

let _routers = [
    {
        path: "/",
        component: home,
        children: [
            {
                path: "a",
                component: a1,
            },
            {
                path: "b",
                component: a2,
            },
            {
                path: "c",
                component: a3
            }
        ]
    }
]

Vue.use(VueRouter);

let router = new VueRouter({ routes: _routers });

export default router;