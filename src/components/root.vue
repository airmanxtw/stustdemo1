<template>
  <div>
    <mySelect :items="leftItems" />
    <myDirection />
  </div>
</template>
<script>
import mySelect from "./exams/select/mySelect.vue";
import myDirection from "./exams/select/myDirection.vue";
export default {
  data() {
    return {
      leftItems: [
        { text: "apple", value: "apple" },
        { text: "car", value: "car" },
      ],
    };
  },
  components: {
    mySelect,
    myDirection,
  },
};
</script>
