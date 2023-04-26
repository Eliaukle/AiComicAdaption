<template>
    <div class="cover">
        <img height="240" width="180" :src="props.src" style="border-radius: 5px; cursor: pointer; object-fit: cover;" @click="toDetail">
        <div style="position: absolute; top: 200px; left: 0px; height: 40px; width: 180px; background: linear-gradient(to top, rgba(0,0,0,1),rgba(0,0,0,0)); border-radius: 5px; opacity: 0.7;"></div>
        <a>
            <div class="mask" @click="toDetail"></div>
            <br>
            <text class="title" style="font-size: large;" @click="toDetail">{{ props.title }}</text>
        </a>
        <text style="font-size: small; color: #fff; position: absolute; top: 215px; left: 5px;">
            {{ props.author }}
        </text>
        <span style="position: absolute; top: 215px; right: 5px;">
            <n-icon size="14" color="#fff">
                <ThumbsUp />
            </n-icon>
            <text style="font-size: small; color: #fff;">
                {{ props.likes }}
            </text>
        </span>
        <div style="height: 10px;"></div>
    </div>
</template>

<script setup>
import { ThumbsUp } from "@vicons/carbon"

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
    width: 180px;
    display: inline-block;
}
.mask {
    position: absolute; 
    top: 0px; 
    left: 0px; 
    width: 180px; 
    height: 240px; 
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