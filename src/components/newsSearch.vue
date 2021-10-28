<template>
    <div>
        <span>關鍵字：</span><input v-model="keyword"/>
        <select>
            <option :key="s.id" v-for="s in searchResult">{{s.title}}</option>
        </select>
    </div>
</template>
<script>
export default {
    data() {
        return {
            keyword:'',
            searchResult:[]
        }
    },
    methods: {
        search(){
            this.axios.get(`https://portal.stust.edu.tw/exteduapi/data/news/keyword/${this.keyword}`).then(res=>{
                this.searchResult=res.data;
            })
        }
    },
    watch: {
        keyword(){
            this.search();
        }
    },
}
</script>