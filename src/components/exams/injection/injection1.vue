<template>
  <div>
    
    <!-- // ! 這個很危險！,我想沒人這麼做吧！！？ -->
    <p v-html="constructor.constructor('alert(1)')()" />

    <!-- // * 用v-html呈現html，安全!!! -->
    <div v-html="injection1"/>
    <div v-html="injection2"/>

    <!-- // * 用{{}}呈現html，安全 -->
    {{ injection1 }}<br />
    {{ injection2 }}<br />

    <!-- // ! 危險 -->
    <a :href="injection3">injection3</a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      injection1: "constructor.constructor('alert(1)')()",
      injection2: "<script>alert(2)" + "</" + "script>",
      injection3: "javascript:alert(0)",
    };
  },
};
</script>