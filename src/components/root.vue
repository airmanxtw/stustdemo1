<template>
  <div>
    <h2>Root</h2>
    <router-link to="/">to home</router-link>
    <router-link to="/a">to a</router-link>
    <router-link to="/b">to b</router-link>
    <router-link to="/c">to c</router-link>
    <!-- <button @click='goa'>go a</button> -->
    <router-view></router-view>
    <addfileds />
  </div>
</template>
<script>
import addfileds from "./exams/addFiled/addFiled.vue";
export default {
  methods: {
    goa() {
      this.$router.push("a");
    },
  },
  components: {
    addfileds,
  },
  created() {
    let students = [
      {
        studno: "A12345",
        studname: "顏大鈞",
        classno: "A10",
        classna: "資工一甲",
      },
      {
        studno: "A12346",
        studname: "施志鴻",
        score: 60,
      },
    ];

    let s = {
      studno: "A12345",
      studname: "顏大鈞",
      classno: "A10",
      classna: "資工一甲",
    };

    // studnet={...student};

    // students = [...stud];

    // students = students.map((student) => ({
    //   ...{ score: null, classno: null, classna: null },
    //   ...student,
    // }));

    debugger;

    let student = {
      studno: "A12345",
      studname: "顏大鈞",
      score: null,
    };

    student={...student,...{age:10},...{classno:"A123"}};

    let a1=[1,2,3];
    let b1=[4,5,6];

    let c=[...a1,...b1];

    

    studnet = { ...student, ...{ classno: "A10", classna: "資工一甲" } };

    student.classno = "A10";
    student.classna = "資工一甲";

    let ans1 = student.score;
    let ans2 = student.classno;

    if (student.classno === undefined) undefined;

    let a = [{ a: 10, b: 20 }, { a: 20 }];
    let b = [].push({ b: null });
    let y = a.map((item) => {
      return { ...{ b: null }, ...item };
    });
    let x = { ...{ b: null }, ...{ a: 10 } };
    debugger;
  },
};
</script>