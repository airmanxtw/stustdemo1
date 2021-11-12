<template>
    <v-text-field :value="value" @change="mychange($event)"></v-text-field>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    props:{
        value:{
            type:String,
            default:''
        }
    },
    methods: {
        mychange(event){
            debugger;
            this.$emit('change',event);
            //this.$emit("update:value",event);
        }
    },
}
</script>