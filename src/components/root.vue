<template>
  <v-app>
    <v-main>
      <v-container>
        <h2>Root</h2>
        <router-link to="/">to home</router-link>
        <router-link to="/a">to a</router-link>
        <router-link to="/b">to b</router-link>
        <router-link to="/c">to c</router-link>
        <router-view></router-view>
        <aman/>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import aman from "./exams/Animation/aman.vue";
export default {
  components:{
    aman
  }
};
</script>
