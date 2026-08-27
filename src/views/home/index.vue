<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col items-center">
    <blog-card
      v-for="item in 5"
      :key="item"
    />
    <div class="flex justify-center">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="15"
      />
    </div>
  </div>
</template>

<style scoped></style>
