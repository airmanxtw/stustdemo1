<template>
  <div>
    <v-dialog v-model="dialog" max-width="500">
        <my-form :stud="selectstud"/>
    </v-dialog>
    
    <v-simple-table>
      <thead>
        <tr>
          <th>編輯</th>
          <th>學號</th>
          <th>姓名</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="stud in studs" :key="stud.studno">
          <td>
            <v-btn color="primary" @click="select(stud)">
              <v-icon>mdi-lead-pencil</v-icon>
              編輯</v-btn
            >
          </td>
          <td>{{ stud.studno }}</td>
          <td>{{ stud.studname }}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>
<script>
import myForm from './myForm.vue';
export default {
  components: { myForm },
  data() {
    return {
      studs: [
        { studno: "123", studname: "airmanx" },
        { studno: "124", studname: "mystic" },
        { studno: "125", studname: "ccsu" },
      ],
      selectstud:{},
      dialog:false
    };
  },
  methods: {
      select(item){
          this.dialog=true;
          this.selectstud={...item};
      }
  },
};
</script>
