
import Vue from "vue";
import root from "./components/root.vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios,axios);

let rootvue={
    el:'#app',
    render(h) {
        return h(root);
    },
}

new Vue(rootvue);


// let total=0;
// let adder=function(x){return x*x};
// for(var i=1;i<=100;i++)
//     total+=adder(i);
// alert(total);

