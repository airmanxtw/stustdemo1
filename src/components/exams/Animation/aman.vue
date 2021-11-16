<template>
    <v-icon large>mdi-{{icons[counter]}}</v-icon>
</template>
<script>
export default {
    props:{
        delay:{
            type:Number,
            default:500
        } 
    },
    data() {
        return {
            icons:["human-handsup","human-handsdown"],
            counter:0
        }
    },
    created() {
        setInterval(()=>{
            this.counter=(this.counter + 1) % 2;
        },this.delay);
    },

}
</script>