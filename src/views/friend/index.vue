<template>
  <div class="w-full bg-white">
    <!-- 顶部标题 -->
    <div class="rounded-t-lg border border-b-0 border-gray-200 py-4 text-center">
      <h2 class="text-xl font-bold text-gray-700">小伙伴们</h2>
    </div>

    <!-- 友链卡片 -->
    <div class="border border-gray-200 p-4">
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <a
          :href="item.website"
          target="_blank"
          rel="external nofollow noopener"
          class="card flex flex-col items-center rounded-lg p-3 transition-transform hover:-translate-y-1 hover:shadow-lg"
          :style="randomRGB()"
          v-for="(item, index) in friendList"
          :key="index"
          @click="addViews(item.nickname)"
        >
          <div class="h-17.5 w-17.5 overflow-hidden rounded-full bg-transparent">
            <img
              :src="item.avatar"
              class="h-17.5 w-17.5 rounded-full object-cover"
              @error="handleImgError($event)"
              alt=""
            />
          </div>
          <div class="mt-2 w-full text-center text-white">
            <div class="text-xl font-medium">{{ item.nickname }}</div>
            <div class="mt-1 mb-2">{{ item.description }}</div>
          </div>
        </a>
      </div>
    </div>

    <!-- 页面描述 -->
    <div class="border-primary border-t-2 border-b-2 p-4">
      <div
        class="typo content prose prose-sm max-w-none"
        v-lazy-container="{ selector: 'img' }"
        v-viewer
        v-html="info.content"
      ></div>
    </div>

    <div class="p-4">
      <div class="text-lg font-bold text-gray-700">添加友链</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
// import { getData, addViewsByNickname } from '@/api/friend';
// import CommentList from '@/components/comment/CommentList';

interface FriendItem {
  website: string;
  nickname: string;
  avatar: string;
  description: string;
}

interface FriendInfo {
  content: string;
  commentEnabled: boolean;
}

const friendList = ref<FriendItem[]>([
  {
    website: 'xaasd',
    nickname: 'xaasd',
    avatar: 'https://s1.ax1x.com/2020/03/26/G93rfs.jpg',
    description: 'xaasd',
  },
  {
    website: 'xaasd',
    nickname: 'xaasd',
    avatar: '',
    description: 'xaasd',
  },
]);
const info = ref<FriendInfo>({
  content:
    '<p>随机排序，不分先后。欢迎交换友链~(￣▽￣)~*</p>\n<ul>\n<li>昵称：Naccl</li>\n<li>一句话：游龙当归海，海不迎我自来也。</li>\n<li>网址：<a href="https://naccl.top" target="_blank" rel="external nofollow noopener">https://naccl.top</a></li>\n<li>头像URL：<a href="https://naccl.top/img/avatar.jpg" target="_blank" rel="external nofollow noopener">https://naccl.top/img/avatar.jpg</a></li>\n</ul>\n<p>仅凭个人喜好添加友链，请在收到我的回复邮件后再于贵站添加本站链接。原则上已添加的友链不会删除，如果你发现自己被移除了，恕不另行通知，只需和我一样做就好。</p>\n',
  commentEnabled: false,
});

const bgColor = ref([
  '#1abc9c',
  '#2ecc71',
  '#3498db',
  '#9b59b6',
  '#34495e',
  '#f1c40f',
  '#e67e22',
  '#e74c3c',
  '#ee5a24',
  '#9980fa',
  '#8c7ae6',
  '#f79f1f',
]);

// 图片加载失败兜底
const handleImgError = (e: Event) => {
  const target = e.target as HTMLImageElement;
  target.src = '/error.png';
};

// // 获取友链数据
// const getDataFunc = () => {
//   getData().then(res => {
//     if (res.code === 200) {
//       friendList.value = res.data.friendList;
//       info.value = res.data.friendInfo;
//     } else {
//       console.error(res.msg);
//     }
//   }).catch(() => {
//     console.error("请求失败");
//   });
// };

// 点击计数
const addViews = (nickname: string) => {
  // addViewsByNickname(nickname);
};

// 随机背景色
const randomRGB = () => {
  const index = Math.floor(Math.random() * bgColor.value.length);
  return { backgroundColor: bgColor.value[index] };
};

// onMounted(() => {
//   getDataFunc();
// });
</script>
