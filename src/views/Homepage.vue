<template>
    <div>
        <n-grid cols="8" item-responsive>
            <!--轮播图-->
            <n-grid-item span="8">
                <div class="board">
                    <n-carousel
                        effect="card"
                        prev-slide-style="transform: translateX(-150%) translateZ(-800px);"
                        next-slide-style="transform: translateX(50%) translateZ(-800px);"
                        style="height: 420px; top: 24px;"
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
                    <div style="width: 600px; margin: auto;">
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
            </n-grid-item>
            <n-grid-item span="0 1640:1">
                <div style="height: 425px; "></div>
                <div style="height: 415px; background-color: #f8f9fd;"></div>
                <div style="height: 475px; "></div>
                <div style="height: 765px; background-color: #f8f9fd;"></div>
            </n-grid-item>
            <n-grid-item span="6 100:8 1640:6">
            <div style="overflow-x: auto;">
                <!--编辑推荐-->
                <n-card style="width: 1240px; height: 425px; margin: auto;" :bordered="false">
                    <!-- <div style="height: 10px;"></div> -->
                    <!-- <text style="font-size: 24px; position: absolute;">编辑推荐</text> -->
                    <n-h2 prefix="bar" align-text style="margin-top: 15px; margin-bottom: -30px;">编辑推荐</n-h2>
                    <div style="height: 40px;"></div>
                    <div> 
                        <n-space justify="space-between" style="margin-top: 20px;">
                            <Cover1 v-for="i in 6"
                                :id="cover1.id"
                                :src="cover1.src "                           
                                :title="cover1.title"                        
                                :author="cover1.author"                           
                                :likes="cover1.likes"
                                :label1="cover1.label1"
                                :label2="cover1.label2"
                                :rank="1"
                            />
                        </n-space>
                    </div>
                </n-card>
                <!--分类精选-->
                <div style="background-color: #f8f9fd;">
                    <n-card style="width: 1240px; height: 415px; margin: auto; background-color: #f8f9fd;" :bordered="false">
                        <div style="height: 10px;"></div>
                        <n-space justify="space-between">
                            <!-- <text style="font-size: 24px;">
                                分类精选
                            </text> -->
                            <n-h2 prefix="bar" align-text >分类精选</n-h2>
                            <span>
                                <span v-for="classification in classifications" style="color: #FFF; margin: 10px;">
                                    <n-button round type="primary" v-if="classification.label == myClassification">
                                        {{ classification.label }}
                                    </n-button>
                                    <n-button strong secondary round type="tertiary" v-else @click="changeClassification(classification)" >
                                        {{ classification.label }}
                                    </n-button>
                                </span>
                            </span>
                            <n-button type="primary" ghost>更多分类</n-button>
                        </n-space>
                        <div style="height: 10px;"></div>
                        <div> 
                            <n-space justify="space-between" style="margin-top: 20px;">
                                <Cover2 v-for="i in 6"
                                    :id="cover2.id"
                                    :src="cover2.src "                           
                                    :title="cover2.title"                        
                                    :author="cover2.author"                           
                                    :likes="cover2.likes"
                                />
                            </n-space>
                        </div>
                    </n-card>
                </div>
                <!--最新上架-->
                <n-card style="width: 1240px; height: 475px; margin: auto;" :bordered="false">
                    <!-- <div style="height: 10px;"></div>
                    <text style="font-size: 24px; position: absolute;">最新上架</text> -->
                    <n-h2 prefix="bar" align-text style="margin-top: 15px; margin-bottom: -30px;">最新上架</n-h2>
                    <div style="height: 40px;"></div>
                    <div> 
                        <n-space justify="space-between" style="margin-top: 20px;">
                            <Cover3 v-for="i in 10"
                                :id="cover3.id"
                                :src="cover3.src "                           
                                :title="cover3.title"                        
                                :author="cover3.author"                           
                                :likes="cover3.likes"
                                :label1="cover3.label1"
                            />
                        </n-space>
                    </div>
                </n-card>
                <!--榜单推荐-->
                <div style="background-color: #f8f9fd;">
                    <n-card style="width: 1240px; height: 765px; margin: auto; background-color: #f8f9fd;" :bordered="false">
                        <div style="height: 10px;"></div>
                        <n-space justify="space-between">
                            <!-- <text style="font-size: 24px;">
                                榜单推荐
                            </text> -->
                            <n-h2 prefix="bar" align-text>榜单推荐</n-h2>
                            <span>
                                <n-tabs default-value="hot" size="large" justify-content="space-evenly" style="width: 300px; margin-top: -10px;">
                                    <n-tab-pane name="hot" tab="人气榜">
                                    </n-tab-pane>
                                    <n-tab-pane name="new" tab="新作榜">
                                    </n-tab-pane>
                                    </n-tabs>
                            </span>
                            <n-button type="primary" ghost>更多榜单</n-button>
                        </n-space>
                        <div> 
                            <n-space justify="space-between" size="large" style="margin-top: 20px;">
                                <Cover4 v-for="i in 9"
                                    :id="cover4.id"
                                    :src="cover4.src "                           
                                    :title="cover4.title"                        
                                    :author="cover4.author"                           
                                    :content="cover4.content"
                                    :rank="i"
                                />
                            </n-space>
                        </div>
                    </n-card>
                </div>
            </div>
            </n-grid-item>
            <n-grid-item span="0 1640:1">
                <div style="height: 425px; "></div>
                <div style="height: 415px; background-color: #f8f9fd;"></div>
                <div style="height: 475px; "></div>
                <div style="height: 765px; background-color: #f8f9fd;"></div>
            </n-grid-item>
        </n-grid>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import Cover1 from "../components/Cover1.vue";
import Cover2 from "../components/Cover2.vue";
import Cover3 from "../components/Cover3.vue";
import Cover4 from "../components/Cover4.vue";

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

const classifications = reactive([
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
])
const myClassification = ref("恋爱")

const cover1 = reactive({
    id: 1,
    src: "https://p.ipic.vip/iab0u7.png",
    title: "标题1",
    author: "作者1",
    likes: 100,
    label1: "标签1",
    label2: "标签2",
})

const cover2 = reactive({
    id: 2,
    src: "https://p.ipic.vip/gx2czf.png",
    title: "标题2",
    author: "作者2",
    likes: 20,
})

const cover3 = reactive({
    id: 3,
    src: "https://p.ipic.vip/pd4154.jpeg",
    title: "标题3",
    author: "作者3",
    likes: 40,
    label1: "标签1",
})

const cover4 = reactive({
    id: 4,
    src: "https://p.ipic.vip/i2xozk.jpeg",
    title: "标题4",
    author: "作者4",
    likes: 40,
    content: "内容简介内容简介内容简介内容简介内容简介",
})


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

const changeClassification = (classification) => {
    myClassification.value = classification.label
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