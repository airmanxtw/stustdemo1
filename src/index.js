
// import Vue from "vue";
// import root from "./components/root.vue";

// new Vue({
//     el:'#app',
//     render(h) {
//         return h(root);
//     },
// })
let total=0;
let adder=(x) => x*x;
for(var i=1;i<=100;i++)
    total+=adder(i);
alert(total);

