<script setup lang="ts">
import HeaderBar from '@/layouts/HeaderBar.vue';
import UserProfile from '@/layouts/UserProfile.vue';
import RandomArticle from '@/layouts/RandomArticle.vue';
import TagCloud from '@/layouts/TagCloud.vue';
import PageFooter from '@/layouts/PageFooter.vue';
import Category from '@/layouts/Category.vue';
</script>

<template>
  <div class="flex h-full w-full flex-col items-center justify-center">
    <header-bar />
    <div class="w-full flex-1 bg-[rgba(239,239,239,1)] pt-16">
      <div class="flex h-full w-full justify-center py-4">
        <div class="aside-container">
          <category />
          <user-profile />
        </div>
        <div class="mx-4 h-full w-1/2 bg-[white]">
          <router-view />
        </div>
        <div class="aside-container">
          <random-article />
          <tag-cloud />
        </div>
      </div>
    </div>
    <page-footer />
  </div>
</template>

<style scoped>
.aside-container > * {
  width: 250px;
}
</style>
