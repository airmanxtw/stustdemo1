<template>
    <div>
        c={{c}}
        <button @click="c=c+1;ct.push(c)">click me</button>
        <h2 :key="item" v-for="item in ct">{{item}}</h2>
    </div>
</template>
<script>
export default {
    data() {
        return {
            c:0,
            ct:[]
        }
    },
}
</script>
