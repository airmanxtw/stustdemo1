<template>
  <v-app>
    <v-main>
      <v-container>
        <h2>Root3</h2>

        <router-link to="/">to home</router-link>
        <router-link to="/a">to a</router-link>
        <router-link to="/b">to b</router-link>
        <router-link to="/c">to c</router-link>
        <router-view></router-view>

        <!-- <p v-html="constructor.constructor('alert(1)')()"></p> -->
        <injection-1 />
        <h1>key</h1>

        <myinput
          :textProps="{ outlined:true, dense: true }"
          :btnProps="{ color: 'primary', large: true }"
        ></myinput>


      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import StudForm from "./exams/form/studForm.vue";
import Injection1 from "./exams/injection/injection1.vue";
import Myinput from "./exams/myinput/myinput.vue";
import Socket from "./exams/socket/socket.vue";

export default {
  data() {
    return {
      dialog: false,
      id: 1,
      inject: "constructor.constructor('alert(1)')()",
    };
  },
  components: {
    StudForm,
    Socket,
    Injection1,
    Myinput,
  },
};
</script>
