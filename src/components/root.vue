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
        <image-2/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Image2 from './exams/imageps/image2.vue';
export default {
  components:{
    Image2
    
  }
};
</script>
