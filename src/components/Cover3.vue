<template>
    <div class="cover">
        <img height="132" width="220" :src="props.src" style="border-radius: 5px; cursor: pointer; object-fit: cover;" @click="toDetail">
        <div style="position: absolute; top: 97px; left: 0px; height: 35px; width: 220px; background: linear-gradient(to top, rgba(0,0,0,1),rgba(0,0,0,0)); border-radius: 5px; opacity: 0.7;"></div>
        <a>
            <div class="mask" @click="toDetail"></div>
            <br>
            <n-space justify="space-between">
                <text class="title" style="font-size: medium;" @click="toDetail">{{ props.title }}</text>
                <text style="font-size: medium; color: #b0b0b0;">{{ props.label1 }}</text>
            </n-space>
        </a>
        <text style="font-size: small; color: #fff; position: absolute; top: 107px; left: 5px;">
            {{ props.author }}
        </text>
        <div style="height: 10px;"></div>
    </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

const props = defineProps({
    id: {
        type: Number,
        default: 0,
    },
    src: {
        type: String,
        default: '',
    },
    title: {
        type: String,
        default: '',
    },
    author: {
        type: String,
        default: '',
    },
    likes: {
        type: Number,
        default: 0,
    },
    label1: {
        type: String,
        default: '',
    },
})

const toDetail = () => {
    const { href } = router.resolve({
        path: "/detail",
        query: {
            id: props.id,
        }
    })
    window.open(href, '_blank')
}

</script>

<style lang="scss" scoped>
.cover {
    position: relative;
    width: 220px;
    display: inline-block;
}
.mask {
    position: absolute; 
    top: 0px; 
    left: 0px; 
    width: 240px; 
    height: 160px; 
    background-color: #FFF; 
    opacity: 0;
    cursor: pointer;
}
.title {
    cursor: pointer;
}
.cover a:hover .mask {opacity: 0.2;} 
.cover a:hover .title {color: #3399ff;}
</style>