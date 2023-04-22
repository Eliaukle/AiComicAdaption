<template>
    <div>
        {{ route.query.id }}详情
    </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

</script>

<style lang="scss" scoped>

</style>