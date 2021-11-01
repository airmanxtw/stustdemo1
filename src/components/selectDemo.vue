<template>
    <select multiple >
        <option @click="select($event.target)"  :key="item" v-for="item in left">{{item}}</option>
    </select>
</template>
<script>
export default {
    data() {
        return {
            left:["car","apple","dog","cat"],
            right:[],
            st:null
        }
    },
    methods: {
        select(evt){
            debugger;
        }
    },
}
</script>