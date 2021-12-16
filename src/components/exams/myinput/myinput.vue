<template>
  <div>
    <v-text-field :value="value" v-bind="textProps"></v-text-field>
    <v-btn v-bind="btnProps">確認</v-btn>
  </div>
</template>
<script>
export default {
  model: {
    prop: "value",
    event: "change",
  },
  data() {
    return {};
  },
  props: {
    value: {
      type: String,
      default: "",
    },
    textProps: {
      type: Object,
      default: null,
    },
    btnProps: {
      type: Object,
      default: null,
    },
  },
  methods: {
    mychange(event) {
      this.$emit("change", event);
    },
  },
};
</script>