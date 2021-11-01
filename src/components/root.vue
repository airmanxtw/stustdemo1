<template>
  <div>
    <!-- -{{text}}- -->
    <!-- <br/> -->
    <!-- <input :value="text" @input="text=$event.target.value" /> -->
    <!-- <input v-model="text"/> -->
    <studList :studs="rootstuds" @delete="rootdelete" />

    <div>
      <span>學號：<input v-model="newstuds.no" /></span>
      <span>姓名：<input v-model="newstuds.name" /></span>
      <button @click="rootstuds.push({ no: newstuds.no, name: newstuds.name })">
        新增
      </button>
    </div>
  </div>
</template>
<script>
import studList from "./studList.vue";
export default {
  data() {
    return {
      text: "abcd",
      newstuds: {
        no: "",
        name: "",
      },
      rootstuds: [
        { no: "12345", name: "airmanx" },
        { no: "54321", name: "ccsu" },
      ],
    };
  },
  methods: {
    rootdelete(studno) {
      this.rootstuds = this.rootstuds.filter((item) => item.no != studno);
    },
  },
  components: {
    studList,
  },
};
</script>
