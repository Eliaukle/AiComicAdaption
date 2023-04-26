<template>
    <div>
        <div>
            <n-layout position="absolute">
                <n-layout-header style="height: 64px; padding: 24px; background-color: #202020;">
                    <n-space justify="center" size="large" style="width: 600px; margin: auto;">
                        <span v-for="column in columns" style="color: #FFF;">
                            <n-button v-if="route.path == column.path" text color="#FFF" size="large" @click="changeColumn(column)">
                                <b>{{ column.label }}</b>
                            </n-button>
                            <n-button v-else text color="#b0b0b0" @click="changeColumn(column)">
                                {{ column.label }}
                            </n-button>
                        </span>
                        <span>
                            <n-input round placeholder="搜索作品、作者名" style="margin-top: -50%;">
                                <template #suffix>
                                    <n-icon :component="SearchOutline" />
                                </template>
                            </n-input>
                        </span>
                        <span>
                            <n-button text color="#b0b0b0">
                                登录
                            </n-button>
                            <text style="color: #b0b0b0;">&nbsp;|&nbsp;</text>
                            <n-button text color="#b0b0b0">
                                注册
                            </n-button>
                        </span>
                        <n-button text color="#b0b0b0">
                            漫改
                        </n-button>
                        <n-button text color="#b0b0b0">
                            我的
                        </n-button>
                    </n-space>
                </n-layout-header>
                <div>
                    <router-view ></router-view>
                </div>
                <n-layout-footer
                    style="height: 64px; padding: 24px; background-color: #202020; text-align: center; color: #b0b0b0;"
                    >
                    ai漫改工作室
                </n-layout-footer>
            </n-layout>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { SearchOutline } from "@vicons/ionicons5"

import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

const columns = reactive([
    {
        path: "/homepage",
        label: "首页",
    },
    {
        path: "/classify",
        label: "分类",
    },
    {
        path: "/ranking",
        label: "排行榜",
    },
    {
        path: "/community",
        label: "社区",
    },
])

onMounted(() => {
    if (route.path == '/') {
        router.push({
            path: "/homepage"
        })
    }
})

// 跳转栏目
const changeColumn = (column) => {
    if (column.label == "分类") {
        const { href } = router.resolve({
            path: column.path,
            query: {
                tab: 0,
                pay: 0,
                state: 0,
                sort: 0,
                page: 1,
            }
        })
        window.open(href, '_blank')
    } else {
        const { href } = router.resolve({
            path: column.path
        })
        window.open(href, '_blank')
    }
}
 
</script>

<style lang="scss" scoped>
</style>