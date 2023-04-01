<template>
    <el-tabs v-model="activeName">
        <el-tab-pane label="pinia" name="first">
            <Pinia/>
        </el-tab-pane>
        <el-tab-pane label="form" name="second">
            22222
        </el-tab-pane>
    </el-tabs>
</template>
<script setup lang="ts">
    import {ref} from 'vue'
    import Pinia from '@/components/pinia.vue'
    const activeName = ref('first')

</script>
