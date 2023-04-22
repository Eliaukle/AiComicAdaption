<template>
    <div>
        <div class="board">
            <n-carousel
                effect="card"
                prev-slide-style="transform: translateX(-150%) translateZ(-800px);"
                next-slide-style="transform: translateX(50%) translateZ(-800px);"
                style="height: 420px; width: 100vw; top: 24px;"
                autoplay
            >
                <n-carousel-item v-for="carousel in carouselList" :style="{ width: '60%' }">
                <img
                    class="carousel-img"
                    :src=carousel.src
                    @click="toDetail(carousel)"
                    style="cursor: pointer;"
                >
                </n-carousel-item>
            </n-carousel>
            <n-space justify="center" size="large" style="margin-top: 48px;">
                <span v-for="tab in tabList" style="color: #FFF;">
                    <n-button v-if="tab.id != 0" text color="#b0b0b0" @click="toClassify(tab)">
                        {{ tab.label }}
                    </n-button>
                    <n-button v-else text color="#FFF" size="large" @click="toClassify(0)">
                        {{ tab.label }}
                    </n-button>
                </span>
            </n-space>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";

import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

const tabList = reactive([
    {
        id: 1,
        label: "恋爱",
    },
    {
        id: 2,
        label: "古风",
    },
    {
        id: 3,
        label: "穿越",
    },
    {
        id: 4,
        label: "青春",
    },
    {
        id: 5,
        label: "奇幻",
    },
    {
        id: 6,
        label: "都市",
    },
    {
        id: 7,
        label: "总裁",
    },
    {
        id: 8,
        label: "悬疑",
    },
    {
        id: 0,
        label: "全部",
    },
])

const carouselList = reactive([
    {
        id: 1,
        src: "https://p.ipic.vip/jx1vz0.jpeg"
    },
    {
        id: 2,
        src: "https://p.ipic.vip/pd4154.jpeg"
    },
    {
        id: 3,
        src: "https://p.ipic.vip/ojcckq.jpeg"
    },
    {
        id: 4,
        src: "https://p.ipic.vip/i2xozk.jpeg"
    },
])

// 查看详情
const toDetail = (carousel) => {
    const { href } = router.resolve({
        path: "/detail",
        query: {
            id: carousel.id
        }
    })
    window.open(href, '_blank')
}

// 跳转到分类栏目
const toClassify = (tab) => {
    const { href } = router.resolve({
        path: "/classify",
        query: {
            tab: tab.id? tab.id: 0,
            pay: 0,
            state: 0,
            sort: 0,
            page: 1,
        }
    })
    window.open(href, '_blank')
}

</script>

<style lang="scss" scoped>
.carousel-img {
    margin: 0 auto;
    width: 100%;
    height: 420px;
    object-fit: cover;
    border-radius: 10px;
}
.board {
    height: 512px;
    background-color: #323540;
}

</style>