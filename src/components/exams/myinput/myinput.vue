<template>
    <v-text-field :value="value" @change="mychange($event)"></v-text-field>
</template>
<script>
export default {
    props:{
        value:{
            type:String,
            default:''
        }
    },
    methods: {
        mychange(event){
            //this.$emit('change',event);
            this.$emit("update:value");
        }
    },
}
</script>