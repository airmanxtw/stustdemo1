
import Vue from "vue";
import root from "./components/root.vue";

new Vue({
    el:'#app',
    render(h) {
        return h(root);
    },
})

