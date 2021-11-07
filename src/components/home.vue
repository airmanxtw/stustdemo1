<template>
  <div>
    this is home key:{{ key }}<br />
    <button @click="setkey('abcdef')"></button>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["key"]),
  },
  methods: {
    ...mapMutations(["setkey"]),
  },
};
</script>