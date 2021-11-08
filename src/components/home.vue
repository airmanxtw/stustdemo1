<template>
  <div>
    this is home key:{{ passkey }}-{{ userid }}-{{ showkey }}<br />
    <button @click="setkey('abcdefgxxxxx')">setKey</button>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["passkey", "userid"]),
    ...mapGetters(["showkey"]),
    showusername() {
      return "airmanx";
    },
  },
  methods: {
    ...mapMutations(["setkey"]),
    test() {
      this.passkey;
    },
  },
};
</script>
