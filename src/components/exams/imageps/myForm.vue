<template>
  <v-card>
    <v-card-title class="blue white--text">表單</v-card-title>
    <v-card-text>
      <v-form v-model="vaild">
        <v-row dense>
          <v-col cols="12">
            <v-text-field
              label="學號"
              v-model="stud.studno"
              :rules="[req(stud.studno)]"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field label="姓名"></v-text-field>
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
  data() {
    return {
      vaild: true,
      stud: {
        studno: "",
        studname: "",
      },
      req(v) {
        return !!v || "請填寫";
      },
    };
  },
};
</script>
