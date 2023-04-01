<template>
    <p>{{ counterStore.count }}</p>
    <p>{{ counterStore.doubleCount }}</p>
    <el-button type="primary" @click="add">button</el-button>
    <p>{{ aaa }}</p>
    <p>{{ bbb }}</p>
    <p>{{ bbb10 }}</p>
    <p>{{ arr }}</p>
    <el-button type="success" @click="add1">button1</el-button>
</template>
<script setup lang="ts">
    import {storeToRefs} from 'pinia'
    import {useCounterStore,useMainStore} from '@/stores/counter'

    const counterStore = useCounterStore()

    const mainStore = useMainStore()
    //解构并设置响应式
    const {aaa,bbb,arr,bbb10} = storeToRefs(mainStore)

    const add = ()=>{
        counterStore.count++
    }

    const add1 = ()=>{
        //改变store里的值
        //state.aaa++
        //mainStore.$patch({
            //aaa:mainStore.aaa+1
        //})
        //mainStore.$patch(state => {
            //state.aaa++
            //state.bbb=state.bbb*2
            //state.arr.push(1)
        //})
        mainStore.change(10)
    }

</script>
