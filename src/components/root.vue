<template>
    <div class="b" >
        root:{{title}} 
        <button @click="title='root'">root</button>
        <news :title="title"></news>
    </div>
</template>
<script>
import counter from "./counter.vue";
import news from "./news.vue";
export default {
    data() {
        return {
            title:"stust",
            counter:0
        }
    },
    methods: {
        
    },
    created() {
        
    },
    components:{
      counter,
      news
    }
   
}
</script>
<style  scoped>
 .b{
     background-color: blue;
     color:white
 }
</style>