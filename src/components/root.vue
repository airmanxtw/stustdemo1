<template>
  <v-app>
    <v-main>
      <v-container>
        <h2>Root</h2>
        <router-link to="/">to home</router-link>
        <router-link to="/a">to a</router-link>
        <router-link to="/b">to b</router-link>
        <router-link to="/c">to c</router-link>
        <!-- <button @click='goa'>go a</button> -->
        <router-view></router-view>
        <addfileds />

        <v-btn color="pink lighten-5" @click="goa">
          <v-icon>mdi-account</v-icon>新增</v-btn
        >name:{{ name }}
        <myinput v-model="name" />

        <!-- <myinput :value="name" @change="(val)=>{name=val}" /> -->
        <!-- <myinput :value.sync="name" /> -->
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import addfileds from "./exams/addFiled/addFiled.vue";
import myinput from "./exams/myinput/myinput";
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    goa() {
      this.$router.push("a");
    },
  },
  components: {
    addfileds,
    myinput,
  },
  created() {},
};
</script>
