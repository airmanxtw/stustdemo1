<template>
  <div>
    <table>
      <tr>
        <td>
          <mySelect :items="leftItems" @input="leftInput" />
        </td>
        <td>
          <myDirection @rightMove="rightMove" @leftMove="leftMove" />
        </td>
        <td>
          <mySelect :items="rightItems" @input="rightInput" />
        </td>
        <td>
          <myDirection/>
        </td>
        <td>
          <mySelect/>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import mySelect from "./mySelect.vue";
import myDirection from "./myDirection.vue";
import { removeItems, moveItems } from "./api.js";

export default {
  data() {
    return {
      leftItems: [
        { text: "apple", value: "apple" },
        { text: "car", value: "car" },
        { text: "dog", value: "dog" },
        { text: "bird", value: "bird" },
        { text: "phone", value: "phone" },
      ],
      rightItems: [],
      leftSelectItems: [],
      rightSelectItems: [],
    };
  },
  methods: {
    leftInput(items) {
      this.leftSelectItems = items;
    },
    rightInput(items) {
      this.rightSelectItems = items;
    },
    rightMove() {
      this.rightItems = moveItems(this.rightItems, this.leftSelectItems);
      this.leftItems = removeItems(this.leftItems, this.leftSelectItems);
    },
    leftMove() {
      this.leftItems = moveItems(this.leftItems, this.rightSelectItems);
      this.rightItems = removeItems(this.rightItems, this.rightSelectItems);
    },
  },
  components: {
    mySelect,
    myDirection,
  },
};
</script>
