<script setup lang="ts">
import HeaderBar from '@/layouts/HeaderBar.vue';
import UserProfile from '@/layouts/UserProfile.vue';
import RandomArticle from '@/layouts/RandomArticle.vue';
import TagCloud from '@/layouts/TagCloud.vue';
import PageFooter from '@/layouts/PageFooter.vue';
import Category from '@/layouts/Category.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { useScrollTOp } from '@/hooks/useScrollTOp.ts';
import { Icon } from '@iconify/vue';
import AnimatedText from '@/components/AnimatedText.vue';

const route = useRoute();
const path = computed(() => route.path);
const isHome = computed(() => path.value === '/home');

const { scrollYValue } = useScrollTOp();

const isShowBgColor = computed(() => scrollYValue.value > window.innerHeight * (3 / 5));

const handleToMain = () => {
  const element = document.getElementById('main-container');
  if (element) {
    // element.scrollIntoView({
    //   behavior: 'smooth', // 平滑滚动
    //   block: 'start', // 滚动到顶部
    //   inline: 'nearest',
    // });
    const top = element.offsetTop;
    window.scrollTo({
      top: top - 64,
      behavior: 'smooth',
    });
  }
};
</script>

<template>
  <div class="relative flex min-h-full w-full flex-col items-center justify-center">
    <div
      v-if="path === '/home'"
      class="relative h-screen w-full"
    >
      <!--   todo 背景大图 及 按钮   -->
      <img
        src="/bg.jpg"
        alt=""
      />
      <div class="text-primary absolute top-[50%] left-[50%] -translate-1/2">
        <animated-text
          text="XNAGTO`S BLOG"
          type="bounce"
          :speed="2"
          class="tracking-wide select-none"
        />
      </div>
      <div
        class="floating-element absolute bottom-20 left-[50%] -translate-x-1/2 cursor-pointer text-6xl text-fuchsia-100"
        @click="handleToMain"
      >
        <icon icon="ant-design:down-circle-outlined"></icon>
      </div>
    </div>
    <header-bar
      :is-show-bg-color="!isHome || isShowBgColor"
      :path="path"
    />
    <div
      id="main-container"
      class="w-full flex-1 bg-[rgba(239,239,239,1)]"
      :class="{ 'pt-[64px]': path !== '/home' }"
    >
      <div class="flex h-full w-full justify-center py-4">
        <div class="aside-container">
          <user-profile />
        </div>
        <div class="mx-4 h-full w-1/2">
          <router-view />
        </div>
        <div class="aside-container">
          <random-article />
          <category />
          <tag-cloud />
        </div>
      </div>
    </div>
    <page-footer />
  </div>
</template>

<style scoped>
.aside-container {
  display: flex;
  flex-direction: column;
  & > * {
    margin-bottom: 16px;
    width: 250px;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
}
</style>
