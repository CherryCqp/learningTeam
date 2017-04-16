<template>
    <div>
        <el-time-select
        v-model="value1"
        :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30'
        }"
        placeholder="选择时间">
        </el-time-select>
        <el-button type="primary" @click="commit">提交</el-button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                value1:''
            }
        },
        methods:{
            commit(){
                console.log(this.value1);
            }
        }
    }
</script>
