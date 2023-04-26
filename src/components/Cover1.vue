<template>
    <div class="cover">
        <img height="240" width="180" :src="props.src" style="border-radius: 5px; cursor: pointer; object-fit: cover;" @click="toDetail">
        <a>
            <div class="mask" @click="toDetail"></div>
            <br>
            <text class="title" style="font-size: large;" @click="toDetail">{{ props.title }}</text>
        </a>
        <n-tag :bordered="false" :color="{ color: '#000', textColor: '#fff', borderColor: '#000' }" size="small" style="position: absolute; left: 5px; top: 212px; opacity: 0.5;" >
            {{ props.label1 }}
        </n-tag>
        <n-tag v-if="props.label2" :bordered="false" :color="{ color: '#000', textColor: '#fff', borderColor: '#000' }" size="small" style="position: absolute; margin-left: 10px; top: 212px; opacity: 0.5;" >
            {{ props.label2 }}
        </n-tag>
        <n-space justify="space-between">
            <text style="font-size: small; color: #b0b0b0;">
                {{ props.author }}
            </text>
            <span>
                <n-icon size="14" color="#b0b0b0">
                    <ThumbsUp />
                </n-icon>
                <text style="font-size: small; color: #b0b0b0;">
                    {{ props.likes }}
                </text>
            </span>
        </n-space>
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
    label1: {
        type: String,
        default: '',
    },
    label2: {
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
    border-radius: 5px;
    cursor: pointer;
}
.title {
    cursor: pointer;
}
.cover a:hover .mask {opacity: 0.2;} 
.cover a:hover .title {color: #3399ff;}
</style>