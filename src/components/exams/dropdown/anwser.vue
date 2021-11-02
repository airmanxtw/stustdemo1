<template>
  <div>
    <my-drop-down v-model="city" :items="cityItems" />
    <my-drop-down v-model="site" :items="siteItems" />
    <my-drop-down v-model="road" :items="roadItems" />
  </div>
</template>
<script>
import { getCity, getSite, getRoad } from "./api.js";
import myDropDown from "./myDropDown.vue";
export default {
  data() {
    return {
      city: null,
      site: null,
      road: null,
      cityItems: null,
      siteItems: null,
      roadItems: null,
    };
  },
  watch: {
    city(newVal) {
      getSite(newVal, (data) => {
        this.siteItems = data;
        this.site = this.siteItems[0].value;
      });
    },
    site(newVal) {
      getRoad(newVal, (data) => {
        this.roadItems = data;
        this.road = this.roadItems[0].value;
      });
    },
  },
  created() {
    getCity((data) => {
      this.cityItems = data;
      this.city = this.cityItems[0].value;
    });
  },
  components: {
    myDropDown,
  },
};
</script>