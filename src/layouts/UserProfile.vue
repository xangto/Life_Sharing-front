<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

const handleTo = (url: string) => {
  console.log(url);
};

const activeName = ref<string>('');
</script>

<template>
  <div class="hover-shadow overflow-hidden rounded-xl pb-4 shadow">
    <div>
      <img
        src="/avatar.jpg"
        alt=""
      />
    </div>
    <div class="py-4 text-center text-xl font-medium">王剑桥</div>
    <div class="text-info border-b border-[#2224261a] pb-4 text-center text-sm">
      一段个性签名，嘿嘿
    </div>
    <div class="flex items-center justify-center border-b border-[#2224261a] py-4">
      <div
        v-for="(item, i) in 5"
        :key="item"
        :class="[i > 0 ? 'ml-2' : '', i % 2 === 0 ? 'text-[red]' : '']"
        class="flex cursor-pointer items-center justify-center rounded-[50%] bg-[#cccccc98] p-2 hover:bg-[#cccccc]"
        @click="handleTo('/')"
      >
        <Icon
          icon="ant-design:github-outlined"
          class="text-xl"
        />
      </div>
    </div>
    <div class="collapse-container px-4">
      <el-collapse
        v-model="activeName"
        accordion
      >
        <el-collapse-item
          title="个人评价"
          name="1"
        >
          <div>
            王剑桥这个人真的很靠谱，做事踏实有想法，遇事沉稳不浮躁。不管是钻研技术还是日常相处，都思路清晰，善于思考，遇到难题愿意沉下心琢磨解决办法。
          </div>
          <div>
            待人真诚坦荡，相处起来舒服自在，既有敢钻研的韧劲，又有温和通透的格局，和他共事或是做朋友都特别让人安心，是能力与人品都很出彩的人。
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="Feedback"
          name="2"
        >
          <div>
            Operation feedback: enable the users to clearly perceive their operations by style
            updates and interactive effects;
          </div>
          <div>
            Visual feedback: reflect current state by updating or rearranging elements of the page.
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<style scoped>
.collapse-container * {
  background-color: unset;
  color: unset;
  border-bottom-color: #2224261a;
}
</style>
