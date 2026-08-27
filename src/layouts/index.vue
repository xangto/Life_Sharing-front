<script setup lang="ts">
import HeaderBar from "@/layouts/HeaderBar.vue";
import UserProfile from "@/layouts/UserProfile.vue";
import RandomArticle from "@/layouts/RandomArticle.vue";
import TagCloud from "@/layouts/TagCloud.vue";
import PageFooter from "@/layouts/PageFooter.vue";
import Category from "@/layouts/Category.vue";
</script>

<template>
  <div class="flex flex-col justify-center items-center w-full">
    <header-bar/>
    <div class="w-full pt-16 bg-[rgba(239,239,239,1)]">
      <div class="flex justify-center py-4 w-full">
        <div>
          <category/>
          <user-profile/>
        </div>
        <div class="w-1/2 mx-4 h-[1600px] bg-[white]">
          <router-view />
        </div>
        <div>
          <random-article/>
          <tag-cloud/>
        </div>
      </div>
    </div>
    <page-footer/>
  </div>
</template>

<style scoped>

</style>
