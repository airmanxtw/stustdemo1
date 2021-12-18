<template>
  <div>
    <v-text-field :value="value" v-bind="textProps"></v-text-field>
    <v-btn v-bind="btnProps">確認</v-btn>
    <h1>{{ s }}</h1>
  </div>
</template>
<script>
export default {
  model: {
    prop: "value",
    event: "change",
  },
  data() {
    return {
      s: 0,
    };
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
    async testFun() {
      let tot = 0;
      for (let i = 0; i < 9000; i++) tot += i;
      return tot;
    },
  },
  created() {
    this.testFun().then((res) => {
      console.log(`tot=${res}`);
    });
    console.log("created done");
  },
};
</script>