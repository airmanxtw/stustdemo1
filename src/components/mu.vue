<template>
  <tr>
    <td v-for="n in nums">
      <div @click="anser(n, m)" v-for="m in 9">
        {{ n }}x{{ m }}={{ ans[(n, m)] }}
      </div>
    </td>
  </tr>
</template>
<script>
export default {
  props: {
    first: {
      type: Number,
      default: 2,
    },
  },
  methods: {
    anser(a, b) {
      debugger;
      //this.ans[(a, b)] = a * b;

      //alert(`${a}*${b}=${a * b}`);
    },
    ans: [],
  },
  computed: {
    nums() {
      let n = [];
      for (let i = this.first; i <= this.first + 3; i++) {
        n.push(i);
      }
      return n;
    },
  },
};
</script>