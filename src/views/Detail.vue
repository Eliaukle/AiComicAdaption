<template>
    <div>
        <n-grid cols="8" item-responsive>
            <n-grid-item span="0 1640:1">
            </n-grid-item>
            <n-grid-item span="6 100:8 1640:6">
            <div style="overflow-x: auto;">
                {{ route.query.id }}详情
            </div>
            </n-grid-item>
            <n-grid-item span="0 1640:1">
            </n-grid-item>
        </n-grid>
    </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

</script>

<style lang="scss" scoped>

</style>