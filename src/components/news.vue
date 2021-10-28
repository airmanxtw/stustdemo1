<template>
  <div>
      <h1>{{title}}</h1>
    <table>
      <tr :key="n.title" v-for="n in news">
        <td>{{ n.title }}</td>
        <td>
          <p v-html="n.newsContent"></p>
        </td>
      </tr>
    </table>
    count:{{ newsCount }}
    <button @click="changeTitle">change title</button>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      name: "",
      news: [],
    };
  },
  methods: {
    loadData() {
      //   this.news.push({
      //     title: "new1",
      //     newsContent: "abcd",
      //   });
      //   this.news.push({
      //     title: "new2",
      //     newsContent: "abcd",
      //   });
      this.axios
        .get("https://portal.stust.edu.tw/exteduapi/data/news/public")
        .then((res) => {
          this.news = res.data;
        });
    },
    changeTitle(){
        this.title="123";
    }
  },
  computed: {
    newsCount() {
      debugger;
      return this.news.length;
    },
  },
  watch: {
    name(newVal, oldVal) {},
  },
  created() {
    this.loadData();
  },
};
</script>