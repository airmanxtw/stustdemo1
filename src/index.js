
import Vue from "vue";
import root from "./components/root.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "./routerInit.js";
import Vuex from "vuex";
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);
let vuetify=new Vuetify({});

Vue.use(Vuex);

let store=new Vuex.Store({
    state:{
        passkey:'12345',
        userid:''
    },
    getters:{
        showkey(state){
            return `this is ${state.passkey}`;
        }
    },
    mutations:{
        setkey(state,val){
            state.passkey=val;
        }
    }
})

Vue.use(VueAxios, axios);

let rootvue = {
    store,
    vuetify,
    router,
    el: '#app',
    render(h) {
        return h(root);
    },
}

new Vue(rootvue);



