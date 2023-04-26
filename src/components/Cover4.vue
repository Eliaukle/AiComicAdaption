<template>
    <div class="cover">
        <div style="position: absolute; top: 0px; left: 185px; height: 185px; width: 190px; background-color: rgba(240, 240, 244, 1); border-radius: 0 5px 5px 0;">
            <n-tag :color="{ color: '#3399ff', textColor: '#fff', borderColor: '#3399ff' }" :bordered="false" style="margin-top: 20px; margin-left: 20px;">&nbsp;TOP.{{ props.rank }}&nbsp;</n-tag>
            <div style="margin-top: 35px; margin-left: 20px; color: rgb(118, 124, 130);">{{ props.author }}</div>
            <div style="margin-top: 20px; margin-left: 20px; margin-right: 20px; margin-bottom: 20px; color: rgb(118, 124, 130);">{{ props.content }}</div>
        </div>
        <img height="185" width="185" :src="props.src" style="border-radius: 5px 0 0 5px; cursor: pointer; object-fit: cover;" @click="toDetail">
        <a>
            <div class="mask" @click="toDetail"></div>
            <text class="title" style="position: absolute; top: 55px; left: 205px; font-size: large;" @click="toDetail">{{ props.title }}</text>
        </a>
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
    content: {
        type: String,
        default: '',
    },
    rank: {
        type: Number,
        default: 0,
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
    width: 375px;
    display: inline-block;
}
.mask {
    position: absolute; 
    top: 0px; 
    left: 0px; 
    width: 185px; 
    height: 185px; 
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