<template>
    <div class="cover">
        <img height="240" width="180" :src="props.src" style="border-radius: 10px; cursor: pointer;" @click="toDetail">
        <br>
        <n-button text style="font-size: large;" @click="toDetail">
            {{ props.title }}
        </n-button>
        <br>
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
    width: 180px;
    display: inline-block;
}
</style>