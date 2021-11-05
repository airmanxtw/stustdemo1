
import Vue from "vue";
import root from "./components/root.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import a1 from "./components/exams/dropdown/anwser.vue";
import a2 from "./components/news.vue";
import a3 from "./components/mu.vue";


let _routers = [
    {
        path: "/a",
        component: a1,
    },
    {
        path: "/b",
        component: a2,
    },
    {
        path: "/c",
        component: a3
    }
]

let router = new VueRouter({routes:_routers});


Vue.use(VueAxios, axios);

let rootvue = {
    router,
    el: '#app',
    render(h) {
        return h(root);
    }
}

new Vue(rootvue);


// let total=0;
// let adder=function(x){return x*x};
// for(var i=1;i<=100;i++)
//     total+=adder(i);
// alert(total);

