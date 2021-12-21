<template>
  <v-form v-model="valid">
    <v-card @keydown.enter="save">
      <v-card-title class="blue white--text">學生資料</v-card-title>
      <v-card-text>
        <v-text-field
          v-model="stud.studno"
          :rules="[req(stud.studno), max(stud.studno, 8)]"
          counter="8"
          label="學號"
          autofocus
        />
        <v-text-field v-model="stud.studname" label="姓名" />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="success" @click="save">儲存</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>
<script>
import rules from "../../rules.js";
export default {
  mixins: [rules],
  props: {
    id: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      stud: {
        studno: "",
        studname: "",
      },
      valid: false,
    };
  },
  methods: {
    save() {
      alert("enter");
      if (this.valid) {
        this.$emit("inserted");
      }
    },
    keydown() {
      alert("keydown");
    },
  },
  watch: {
    id(newval) {},
  },
  created() {
    // var websocket;
    // websocket = new WebSocket("wss://demo.sewio.net");
    // websocket.onopen = () => {
    //   websocket.send(
    //     '{"headers":{"X-ApiKey":"171555a8fe71148a165392904"},"method":"subscribe","resource":"/feeds/8"}'
    //   );
    // };
    // websocket.onmessage = (res) => {
    //   let data = JSON.parse(res.data);
    //   debugger;
    // };
  },
  updated() {
    console.log(`updated studForm...${new Date().toLocaleTimeString()}`);
  },
};
</script>
