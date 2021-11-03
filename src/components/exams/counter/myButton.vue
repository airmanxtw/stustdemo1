<template>
  <button class="w" @click="btnClick">
      <slot>
        {{ value2 }}
      </slot>
  </button>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: null,
    },
    flag: {
      type: Boolean,
      require: true,
    },
  },
  methods: {
    btnClick() {
      if (this.value == null) {
        this.$emit("input", this.flag);
        this.$emit("changeFlage", !this.flag);
      }
    },
  },
  computed: {
    value2() {
      return this.value ? "O" : this.value == false ? "X" : "";
    },
  },
};
</script>
<style scoped>
.w {
  width: 50px;
  height: 50px;
  margin: 5px;
}
</style>