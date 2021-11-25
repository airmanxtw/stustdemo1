<template>
  <div>
    <v-btn color="primary" @click="signin">簽到</v-btn>
    <v-dialog v-model="dialog" width="400">
      <v-card>
        <v-card-title>
          <v-img
            src="images/pngtree-cartoon-illustration-fruit-pineapple-image_1241681.jpeg"
          >
            <v-row>
                <v-col cols="6">
                <v-img src="images/pngtree-cartoon-illustration-fruit-pineapple-image_1241681.jpeg"/>
                </v-col>
                <v-col cols="6">
                    這是鳳梨
                </v-col>
            </v-row>

          </v-img>
        </v-card-title>
        <v-card-text>您己經於{{ new Date().toTimeString() }}完成簽到作業</v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="warning" @clock="dialog = false">關閉</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    signin() {
      this.dialog = true;



      window.setTimeout(() => {
        this.dialog = false;
      }, 50000);
    },
  },
};
</script>
