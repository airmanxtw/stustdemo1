<template>
  <v-card>
    <v-card-title class="blue white--text">表單</v-card-title>
    <v-card-text>
      <v-form v-model="vaild">
        <v-row dense>
          <v-col cols="12">
            <v-text-field
              label="學號"
              v-model="wstud.studno"
              :rules="[req(wstud.studno)]"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="wstud.studname" label="姓名"></v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn>確定</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    stud: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      vaild: true,
      wstud: {},
      req(v) {
        return !!v || "請填寫";
      },
    };
  },
  methods: {
    bind() {
      this.wstud = { ...this.stud };
    },
  },
  watch: {
    stud: {
      handler(newval, oldval) {
        this.bind();
      },
      deep: true,
    },
  },
  created() {
    //this.bind();
  },
};
</script>
