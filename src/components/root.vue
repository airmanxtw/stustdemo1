<template>
  <table>
    <mu />
    <mu :first="6" />
  </table>
</template>
<script>
import mu from "./mu";
export default {
  components: {
    mu,
  },
};
</script>
