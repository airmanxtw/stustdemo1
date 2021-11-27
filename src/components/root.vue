<template>
  <v-app>
    <v-main>
      <v-container>
        <h2>Root2</h2>

        <router-link to="/">to home</router-link>
        <router-link to="/a">to a</router-link>
        <router-link to="/b">to b</router-link>
        <router-link to="/c">to c</router-link>
        <router-view></router-view>
        <v-btn
          @click="
            id = id + 1;
            dialog = true;
          "
          ><v-icon>mdi-lead-pencil</v-icon>新增學生</v-btn
        >

        <v-dialog v-model="dialog" :max-width="400">
          <stud-form @inserted="dialog = false" :id="id"></stud-form>
        </v-dialog>
        <socket />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import StudForm from "./exams/form/studForm.vue";
import Socket from "./exams/socket/socket.vue";

export default {
  data() {
    return {
      dialog: false,
      id: 1,
    };
  },
  components: {
    StudForm,
    Socket,
  },
};
</script>
