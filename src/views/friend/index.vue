<template>
  <div class="w-full bg-white">
    <!-- 顶部标题 -->
    <div class="rounded-t-lg border border-b-0 border-gray-200 py-4 text-center">
      <h2 class="text-2xl font-bold text-gray-700">小伙伴们</h2>
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
          v-for="item in friendList"
          :key="item.id"
          @click="addViews(item.id)"
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
            <div class="mt-1 mb-2 break-all">{{ item.description }}</div>
          </div>
        </a>
      </div>
    </div>

    <!-- 页面描述 -->
    <div class="border-primary border-t-2 border-b-2 p-4">
      <div
        class="typo content prose prose-sm max-w-none"
        v-html="info.content"
      ></div>
    </div>

    <div class="p-4">
      <div class="py-3 text-lg font-bold text-gray-700">添加友链</div>

      <el-form
        :model="friendForm"
        :rules="rules"
        ref="formRef"
      >
        <el-form-item prop="nickname">
          <el-input
            v-model.trim="friendForm.nickname"
            placeholder="昵称"
          />
        </el-form-item>
        <el-form-item prop="avatar">
          <el-input
            v-model.trim="friendForm.avatar"
            placeholder="头像"
          />
        </el-form-item>
        <el-form-item prop="website">
          <el-input
            v-model.trim="friendForm.website"
            placeholder="网址"
          />
        </el-form-item>
        <el-form-item prop="description">
          <el-input
            v-model.trim="friendForm.description"
            :maxlength="40"
            placeholder="描述"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            :loading="loading"
            @click="handleSubmit"
            >发送</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { checkUrl } from '@/utils/reg.ts'
import type { FriendDTO, FriendVO } from '@/api/types.ts'

const bgColor = [
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
]

const friendForm = reactive<FriendDTO>({
  nickname: '',
  avatar: '',
  description: '',
  website: '',
})

const rules = reactive<FormRules<FriendDTO>>({
  nickname: [
    { required: true, message: '请输入昵称' },
    { max: 15, message: '昵称不可多于15个字符' },
  ],
  avatar: [{ required: true, message: '请输入头像url' }],
  description: [
    { required: true, message: '请输入描述' },
    { max: 40, message: '不可多于40个字符' },
  ],
  website: [{ validator: checkUrl }],
})

const loading = ref(false)
const formRef = ref<FormInstance | null>(null)
const friendList = ref<FriendVO[]>([
  {
    id: '131as54d6a5s1dasd',
    website: 'xaasd',
    nickname: 'xaasd',
    avatar: 'https://s1.ax1x.com/2020/03/26/G93rfs.jpg',
    description: 'xaasd',
  },
  {
    id: '131as54d6a5s1dasd',
    website: 'xaasd',
    nickname: 'xaasd',
    avatar: '',
    description: 'xaasd',
  },
  {
    id: '131as54d6a5s1das21d',
    website: 'xaasd',
    nickname: 'xaasd',
    avatar: '',
    description: 'xaasd',
  },
  {
    id: '131as54d6a5113s1das21d',
    website: 'xaasd',
    nickname: 'xaasd',
    avatar: '',
    description: 'xaasd',
  },
])
const info = {
  content:
    '<p>随机排序，不分先后。欢迎交换友链~(￣▽￣)~*</p>' +
    '\n<p>收到请求后，会在管理台审核后再添加！</p>\n',
}

// 图片加载失败兜底
const handleImgError = (e: Event) => {
  const target = e.target as HTMLImageElement
  target.src = '/error.png'
}

const handleSubmit = () => {
  loading.value = true
  formRef.value
    ?.validate()
    .then((valid) => {
      if (valid) {
      }
    })
    .finally(() => {
      loading.value = false
    })
}

// 点击计数
const addViews = (id: string) => {
  console.log(id)
}

// 随机背景色
const randomRGB = () => {
  const index = Math.floor(Math.random() * bgColor.length)
  return { backgroundColor: bgColor[index] }
}
</script>
