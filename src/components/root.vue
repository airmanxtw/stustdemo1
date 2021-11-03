<template>
  <div>
    
      <myButton :key="n" v-for="n in 9" v-model="b[n]" :flag="flag" @changeFlage="changeFlage">
        {{b[n]?'Y':b[n]==false?'N':''}}
        <template v-slot:foot>
          痴鴻
        </template>
      </myButton>
    
  </div>
</template>
<script>
import myButton from "./exams/counter/myButton.vue";
export default {
  data() {
    return {
      flag:true,
      b:[]
    }
  },
  methods: {
    changeFlage(val){
      this.flag=val;
    }
  },
  components:{
    myButton
  }
}
</script>