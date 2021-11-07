<template>
  <div>
    <h2>Root</h2>
    <router-link to="/">to home</router-link>
    <router-link to="/a">to a</router-link>
    <router-link to="/b">to b</router-link>
    <router-link to="/c">to c</router-link>
    <!-- <button @click='goa'>go a</button> -->
    <router-view></router-view>
    <addfileds />
  </div>
</template>
<script>
import addfileds from "./exams/addFiled/addFiled.vue";
export default {
  methods: {
    goa() {
      this.$router.push("a");
    },
  },
  components: {
    addfileds,
  },
};
</script>