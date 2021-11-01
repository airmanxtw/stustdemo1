// * 選擇器 *
// TODO props : items 資料,預設為{text:'',value:''}的物件集合，例如[{text:'car',value:'car'}]
// TODO event : input(selectItems) 已選擇的物件
<template>
  <select multiple @input="input($event.target)">
    <option :key="item[value]" :value="item[value]" v-for="item in items">
      {{ item[text] }}
    </option>
  </select>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default: null,
    },
    text: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: "value",
    },
  },
  methods: {
    input(event) {
      let selectItems = [];
      Array.from(event.selectedOptions, (element) => {
        selectItems.push({
          [this.text]: element.text,
          [this.value]: element.value,
        });
      });
      this.$emit("input", selectItems);
    },
  },
};
</script>