<template>
    <div>
        c={{c}}
        <button @click="c=c+1;ct.push(c)">click me</button>
        <h2 :key="item" v-for="item in ct">{{item}}</h2>
        <button v-on="{click:hello}">test</button>
        <slot :c="c" :ct="ct">
            <h1>Slot</h1>
        </slot>
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
    methods: {
        hello(){
            alert('hello');
        }
    },
}
</script>
