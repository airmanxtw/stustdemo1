<template>
  <div>
    <div :key="m" v-for="m in [1, 4, 7]">
      <myButton
        :key="m + n - 1"
        v-for="n in 3"
        v-model="b[m + n - 1]"
        :flag="flag"
        @changeFlage="changeFlage"
      >
      </myButton>
    </div>
  </div>
</template>
<script>
import myButton from "./exams/counter/myButton.vue";
export default {
  data() {
    return {
      flag: true,
      b: [],
    };
  },
  methods: {
    changeFlage(val) {
      this.flag = val;
    },
  },
  components: {
    myButton,
  },
};
</script>