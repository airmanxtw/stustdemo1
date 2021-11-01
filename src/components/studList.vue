<template>
    <table>
        <tr>
            <th>學號</th>
            <th>姓名</th>
            <th>刪除</th>
        </tr>
        <tr>
            <td colspan="3">{{`筆數：${size}`}}</td>
        </tr>
        <tr :key="stud.no" v-for="stud in studs">
            <td>{{stud.no}}</td>
            <td>{{stud.name}}</td>
            <td>
                <button v-on:click="$emit('delete',stud.no)">刪除</button>
            </td>
        </tr>
    </table>
</template>
<script>
export default {
    props:{
        studs:{
            type:Array,
            default:[]
        }
    },
    computed: {
        size(){
            return this.studs.length;
        }
    },
}
</script>