<script setup lang="ts">
import {useRouter} from "vue-router";
import {Icon} from "@iconify/vue";


const router = useRouter()

const handleRouterTo = (path: string) => {
  router.push({path: path})
}
</script>

<template>
  <div class="fixed left-0 top-0 w-full h-16 bg-[#0e1f23] text-[#ffffff] px-6 z-50">
    <div class="flex items-center px-[12%] h-full">
      <!-- Logo 区域 -->
      <div
          class="flex items-center h-full text-xl font-bold tracking-wide select-none cursor-pointer text-primary"
          @click="handleRouterTo('/')">
        XangTo's Blog
      </div>
      <div class="flex items-center ml-4 h-full text-gray-300 text-[16px]">
        <div
            class="flex items-center px-6 h-full hover:text-primary hover:bg-[#c0c0c038] cursor-pointer transition-colors duration-200"
            @click="handleRouterTo('/')">
          <icon icon="ant-design:home-outlined"/>
          <span class="mt-0.75 ml-1">首页</span>
        </div>
        <div
            class="flex items-center px-6 h-full hover:text-primary hover:bg-[#c0c0c038] cursor-pointer transition-colors duration-200"
            @click="handleRouterTo('/friend')">
          <icon icon="ant-design:user-outlined"/>
          <span class="mt-0.75 ml-1">友链</span>
        </div>
        <div
            class="flex items-center px-6 h-full hover:text-primary hover:bg-[#c0c0c038] cursor-pointer transition-colors duration-200"
            @click="handleRouterTo('/about')">
          <icon icon="ant-design:info-circle-outlined"/>
          <span class="mt-0.75 ml-1">关于</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
