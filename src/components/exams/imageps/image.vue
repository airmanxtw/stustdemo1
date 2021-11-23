<template>
  <div>
    {{ dataurl }}
    <v-img :src="dataurl" max-width="500"></v-img>
    <v-file-input
      v-model="file"
      @change="filechange"
      accept="image/*"
      label="請選擇圖片"
    ></v-file-input>
    <v-btn @click="goRotate">旋轉</v-btn>
  </div>
</template>
<script>
import resizer from "image-resizer-js";
export default {
  data() {
    return {
      file: null,
      dataurl: null,
      rotate: 0,
    };
  },
  methods: {
    filechange() {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        this.getDataUrl(reader.result);
      });
      reader.readAsDataURL(this.file);
    },
    goRotate() {
      this.rotate = (this.rotate + 1) % 4;
      const blob = this.dataURItoBlob(this.dataurl);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        this.getRotate(reader.result);
      });
      reader.readAsArrayBuffer(blob);
    },
    getRotate(result) {
      resizer(result, { rotate: this.rotate }).then((img) => {
        const blob = new Blob([img]);
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          this.getDataUrl(reader.result);
        });
        reader.readAsDataURL(blob);
      });
    },
    getDataUrl(result) {
      this.dataurl = result;
    },
    dataURItoBlob(dataURI) {
      // convert base64 to raw binary data held in a string
      // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
      var byteString = atob(dataURI.split(",")[1]);

      // separate out the mime component
      var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

      // write the bytes of the string to an ArrayBuffer
      var ab = new ArrayBuffer(byteString.length);

      // create a view into the buffer
      var ia = new Uint8Array(ab);

      // set the bytes of the buffer to the correct values
      for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      // write the ArrayBuffer to a blob, and you're done
      var blob = new Blob([ab], { type: mimeString });
      return blob;
    },
  },
};
</script>
