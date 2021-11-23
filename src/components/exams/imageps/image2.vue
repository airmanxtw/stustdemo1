<template>
  <div>
    {{ dataurl }}
    {{1==1 || "this is false"}}
    <v-img :src="dataurl" max-width="500"></v-img>
    <v-file-input
      v-model="file"
      @change="filechange"
      accept="image/*"
      label="請選擇圖片"
    ></v-file-input>
  </div>
</template>
<script>
export default {
  data() {
    return {
      file: null,
      dataurl: null,
    };
  },
  methods: {
    filechange() {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        this.dataurl = reader.result;
      });
      reader.readAsDataURL(this.file);
    },
  },
};
</script>
