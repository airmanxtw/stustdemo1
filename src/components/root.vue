<template>
    <div class="b" >
        Hello world {{title}}
        <br/>
        <counter v-slot="{c,ct}">
            {{c}}-{{ct.length}}
        </counter>
    </div>
</template>
<script>
import counter from "./counter.vue";
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
      counter
    }
   
}
</script>
<style  scoped>
 .b{
     background-color: blue;
     color:white
 }
</style>