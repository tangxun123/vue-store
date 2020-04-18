<template>
    <div>
        <el-button @click="btnClick">点击了{{num}}次</el-button>{{putString}}
        <span v-for="i in putAry" :key="i">{{i+'--'}}</span>
        <el-button @click="addFont">字体变大</el-button>
    </div>
</template>
<script>
export default {
    name:"info",
    data () {
        return {
            msg:'1',
            num:1
        }
    },
    props:{
        putString:String,
        putAry:Array
    },
    methods: {
        btnClick(){
            this.num++;
        },
        addFont(){
            this.$emit('addFont',0.5)
        }
    }
}
</script>
<style scoped>

</style>