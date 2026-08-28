<script setup lang="ts">
import { reactive } from 'vue'

const info = reactive({
  content:
    '<h3 id="目前可以公开的情报">目前可以公开的情报</h3>\n<ul>\n<li>M E：我一般说我是修电脑的</li>\n<li>目标：把全世界溜一遍</li>\n<li>特征：兴趣至上</li>\n<li>爱好：摄影、骑行、写Bug、打游戏、看动漫</li>\n<li>性格：不喜约束、比较自私、偶尔emo</li>\n</ul>\n<h3 id="我--博客">我 &amp; 博客</h3>\n<p>生性只对感兴趣的事物充满热情，看到有趣的软件都会情不自禁地分析一波技术栈，可能用到了什么 algorithm，然后自我陶醉😅</p>\n<p>喜欢安静，但喜欢听得劲的电音，节奏控，coding 时喜欢听嗨歌，没事就跟着摇一摇🎵</p>\n<p>奶盖要摇匀了喝！🥛</p>\n<p>世界上只有甜的豆腐脑🤗</p>\n<p><a href="https://github.com/Naccl/NBlog" target="_blank" rel="external nofollow noopener">🍓NBlog个人博客系统</a>，本是学习过程中的产物，没想到能受到大家的喜爱，如果你也喜欢本博客，⭐️就是最好的鼓励</p>\n<p>博客现在托管在阿里云学生机，因为水管比较小，静态资源<del>托管在 GitHub，通过 jsDelivr CDN减速</del>已迁至又拍云🚀</p>\n<p>博客源码、部署相关疑难杂症请在 GitHub 提 issue，<strong>请勿</strong>在本博客留言</p>\n<p>如需联系我，请尽量使用 TG 或邮件，thanks（评论我也会收到提醒），因为有很多砖要搬，所以只能随缘回复啦</p>\n',
  title: '关于帅气的 Naccl',
})
</script>

<template>
  <div class="w-full bg-white">
    <!-- 顶部标题 -->
    <div class="rounded-t-lg border border-b-0 border-gray-200 pt-4 text-center">
      <h2 class="text-2xl font-bold text-gray-700">{{ info.title }}</h2>
    </div>

    <div class="p-4">
      <div
        class="typo content prose prose-sm max-w-none"
        v-html="info.content"
      ></div>
    </div>
  </div>
</template>

<style scoped></style>
