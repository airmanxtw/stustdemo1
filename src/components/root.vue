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
        <myImage/>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import Image from './exams/imageps/image';

export default {
  components:{
    myImage:Image
  }
};
</script>
