<template>
  <v-app>
    <v-main>
      <v-container>
        <h2>Root2</h2>
        <!-- <sign/>
        <router-link to="/">to home</router-link>
        <router-link to="/a">to a</router-link>
        <router-link to="/b">to b</router-link>
        <router-link to="/c">to c</router-link>
        <router-view></router-view> -->
        <v-btn @click="dialog = true" :loading="true"
          ><v-icon>mdi-lead-pencil</v-icon>
          <template v-slot:loader>我好忙啊!</template>
          新增學生
        </v-btn>

        <v-dialog v-model="dialog" :max-width="400">
          <stud-form @inserted="dialog = false"></stud-form>
        </v-dialog>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import StudForm from "./exams/form/studForm.vue";

export default {
  data() {
    return {
      dialog: false,
    };
  },
  components: {
    StudForm,
  },
};
</script>
