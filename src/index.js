
import Vue from "vue";
import root from "./components/root.vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios,axios);

new Vue({
    el:'#app',
    render(h) {
        return h(root);
    },
})

