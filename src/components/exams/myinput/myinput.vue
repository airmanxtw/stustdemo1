<template>
    <v-text-field :value="value" @change="mychange($event)"></v-text-field>
</template>
<script>
export default {
    model:{
        prop:"value",
        event:"change"
    },
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
            this.$emit('change',event);            
        }
    },
}
</script>