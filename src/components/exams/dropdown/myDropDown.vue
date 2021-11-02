<template>
    <select :value="value" @change="$emit('input',$event.target.value)">
        <option :key="item[itemValue]" v-for="item in items">{{item.text}}</option>
    </select>
</template>
<script>
export default {
    props:{
        value:{
            type:String,
            default:null
        },
        items:{
            type:Array,
            default:null
        },
        itemText:{
            type:String,
            default:"text"
        },
        itemValue:{
            type:String,
            default:"value"
        }
    },
}
</script>