<template>
    <div>
        <n-grid cols="8" item-responsive>
            <n-grid-item span="0 1640:1">
            </n-grid-item>
            <n-grid-item span="6 100:8 1640:6">
            <div style="overflow-x: auto;">
                <div style="height: 20px;"></div>
                <!--选择分类-->
                <n-card style="width: 1240px; margin: auto;" :bordered="false">
                    <n-space vertical size="large">
                        <div v-for="classify in classifyList">
                            <text style="color: #b0b0b0;">
                                {{ classify.label }}
                            </text>
                            <span v-for="child in classify.children" style="margin-left: 10px;">
                                <n-button strong secondary type="primary" round v-if="((selectedList.tab.key==classify.key)&&(selectedList.tab.selectId==child.id))||((selectedList.pay.key==classify.key)&&(selectedList.pay.selectId==child.id))||((selectedList.state.key==classify.key)&&(selectedList.state.selectId==child.id))" @click="unSelectClassifyChildren(classify)">
                                    {{ child.label }}
                                </n-button>
                                <n-button round quaternary v-else @click="selectClassifyChildren(classify, child)">
                                    {{ child.label }}
                                </n-button>
                            </span>
                        </div>
                    </n-space>
                </n-card>
                <!--结果展示-->
                <n-card style="width: 1240px; margin: auto;" :bordered="false">
                    <n-tabs type="line" @update:value="selectSort">
                        <n-tab-pane name="0" tab="最热">
                            <div style="margin-top: 20px; margin-bottom: 20px;"> 
                                <n-space justify="space-between">
                                    <Cover v-for="i in coverNum"
                                        :id="cover1.id"
                                        :src="cover1.src "                           
                                        :title="cover1.title"                        
                                        :author="cover1.author"                           
                                        :likes="cover1.likes"
                                    />
                                    <div v-for="i in fillerNum" style="width: 180px;"></div>
                                </n-space>
                            </div>
                            <n-pagination @update:page="setQuery" v-model:page="selectedList.page.selectId" :page-count="10" style="justify-content: center;"/>
                        </n-tab-pane>
                        <n-tab-pane name="1" tab="最新">
                            <div style="margin-top: 20px; margin-bottom: 20px;"> 
                                <n-space justify="space-between">
                                    <Cover v-for="i in coverNum"
                                        :id="cover2.id"
                                        :src="cover2.src "                           
                                        :title="cover2.title"                        
                                        :author="cover2.author"                           
                                        :likes="cover2.likes"
                                    />
                                    <div v-for="i in fillerNum" style="width: 180px;"></div>
                                </n-space>
                            </div>
                            <n-pagination @update:page="setQuery" v-model:page="selectedList.page.selectId" :page-count="10" style="justify-content: center;"/>
                        </n-tab-pane>
                    </n-tabs>
                </n-card>
            </div>
            </n-grid-item>
            <n-grid-item span="0 1640:1">
            </n-grid-item>
        </n-grid>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import Cover from "../components/Cover.vue";

import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

const selectedList = reactive({
    tab: {
        key: "tab",
        selectId: route.query.tab || 0,
    },
    pay: {
        key: "pay",
        selectId: route.query.pay || 0,
    },
    state: {
        key: "state",
        selectId: route.query.state || 0,
    },
    sort: {
        key: "sort",
        selectId: route.query.sort || 0,
    },
    page: {
        key: "page",
        selectId: parseInt(route.query.page) || 1,
    },
})
const classifyList = reactive([
    {
        key: "tab",
        label: "题材",
        children: [
            {
                id: 0,
                label: "全部",
            },
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
        ]
    },
    {
        key: "pay",
        label: "属性",
        children: [
            {
                id: 0,
                label: "全部",
            },
            {
                id: 1,
                label: "免费",
            },
            {
                id: 2,
                label: "付费",
            },
        ]
    },
    {
        key: "state",
        label: "进度",
        children: [
            {
                id: 0,
                label: "全部",
            },
            {
                id: 1,
                label: "连载中",
            },
            {
                id: 2,
                label: "已完结",
            },
        ]
    },
])

const cover1 = reactive({
    id: 1,
    src: "https://p.ipic.vip/iab0u7.png",
    title: "标题1",
    author: "作者1",
    likes: 100,
})

const cover2 = reactive({
    id: 2,
    src: "https://p.ipic.vip/gx2czf.png",
    title: "标题2",
    author: "作者2",
    likes: 20,
})

const coverNum = ref(22)
const fillerNum = ref(0)

// // 监视屏幕大小
// function watchWindowSize() {
//     var w = document.documentElement.clientWidth;
//     var boardWidth = w * 0.8;
//     var colNum = Math.floor(boardWidth / 190);
//     fillerNum.value = colNum - (coverNum.value % colNum);
//     console.log(coverNum.value, colNum, fillerNum.value)
// }
// window.addEventListener("resize", watchWindowSize);
// watchWindowSize();

onMounted(() => {
    fillerNum.value = 6 - (coverNum.value % 6);
})

// 设置路由参数
const setQuery = () => {
    router.replace({
        query: {
            tab: selectedList.tab.selectId,
            pay: selectedList.pay.selectId,
            state: selectedList.state.selectId,
            sort: selectedList.sort.selectId,
            page: selectedList.page.selectId,
        }
    })
}

// 选择子分类
const selectClassifyChildren = (classify, child) => {
    switch(classify.key) {
        case "tab":
            selectedList.tab.selectId=child.id
            break
        case "pay":
            selectedList.pay.selectId=child.id
            break
        case "state":
            selectedList.state.selectId=child.id
            break
    }
    setQuery()
}

// 取消选择子分类
const unSelectClassifyChildren = (classify) => {
    switch(classify.key) {
        case "tab":
            selectedList.tab.selectId = 0
            break
        case "pay":
            selectedList.pay.selectId = 0
            break
        case "state":
            selectedList.state.selectId = 0
            break
    }
    setQuery()
}

// 选择排序类别
const selectSort = (name) => {
    selectedList.sort.selectId = name
    selectedList.page.selectId = 1
    setQuery()
}

</script>

<style lang="scss" scoped>
</style>