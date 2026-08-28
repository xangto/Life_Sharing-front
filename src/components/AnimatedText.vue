<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    text?: string;
    type?: 'rainbow' | 'neon' | 'wave' | 'bounce' | 'shimmer' | 'rotate' | 'gradient' | 'sparkle';
    speed?: number;
    size?: string;
  }>(),
  {
    text: '特效文字',
    type: 'rainbow',
    speed: 3,
    size: '48px',
  }
);

const chars = computed(() => props.text.split(''));
</script>

<template>
  <div class="animated-text-wrapper">
    <!-- 彩虹文字 -->
    <div
      v-if="type === 'rainbow'"
      class="rainbow-text"
      :style="{ fontSize: size, animationDuration: speed + 's' }"
    >
      {{ text }}
    </div>

    <!-- 霓虹文字 -->
    <div
      v-else-if="type === 'neon'"
      class="neon-text"
      :style="{ fontSize: size, animationDuration: speed + 's' }"
    >
      {{ text }}
    </div>

    <!-- 波浪文字 -->
    <div
      v-else-if="type === 'wave'"
      class="wave-text"
      :style="{ fontSize: size }"
    >
      <span
        v-for="(char, i) in chars"
        :key="i"
        :style="{ animationDelay: `${i * 0.1}s` }"
      >
        {{ char }}
      </span>
    </div>

    <!-- 跳动文字 -->
    <div
      v-else-if="type === 'bounce'"
      class="bounce-text"
      :style="{ fontSize: size }"
    >
      <span
        v-for="(char, i) in chars"
        :key="i"
        :style="{ animationDelay: `${i * 0.1}s`, animationDuration: speed + 's' }"
      >
        {{ char }}
      </span>
    </div>

    <!-- 流光文字 -->
    <div
      v-else-if="type === 'shimmer'"
      class="shimmer-text"
      :style="{ fontSize: size, animationDuration: speed + 's' }"
    >
      {{ text }}
    </div>

    <!-- 旋转文字 -->
    <div
      v-else-if="type === 'rotate'"
      class="rotate-text"
      :style="{ fontSize: size, animationDuration: speed + 's' }"
    >
      {{ text }}
    </div>

    <!-- 渐变文字 -->
    <div
      v-else-if="type === 'gradient'"
      class="gradient-move"
      :style="{ fontSize: size, animationDuration: speed + 's' }"
    >
      {{ text }}
    </div>

    <!-- 闪烁文字 -->
    <div
      v-else-if="type === 'sparkle'"
      class="sparkle-text"
      :style="{ fontSize: size }"
    >
      <span
        v-for="(char, i) in chars"
        :key="i"
        :style="{ animationDelay: `${i * 0.2}s` }"
      >
        {{ char }}
      </span>
    </div>
  </div>
</template>

<style scoped>
/* 彩虹 */
.rainbow-text {
  font-weight: 900;
  background: linear-gradient(90deg, #ff0000, #ff8800, #ffff00, #00ff00, #0088ff, #8800ff, #ff0000);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: rainbow 3s linear infinite;
}

@keyframes rainbow {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 300% 50%;
  }
}

/* 霓虹 */
.neon-text {
  font-weight: 900;
  color: #00d4ff;
  text-shadow:
    0 0 10px #00d4ff,
    0 0 20px #00d4ff,
    0 0 40px #00d4ff;
  animation: neon 1.5s ease-in-out infinite alternate;
}

@keyframes neon {
  0% {
    opacity: 1;
    text-shadow:
      0 0 10px #00d4ff,
      0 0 20px #00d4ff,
      0 0 40px #00d4ff;
  }
  50% {
    opacity: 0.8;
    text-shadow:
      0 0 5px #00d4ff,
      0 0 10px #00d4ff,
      0 0 20px #00d4ff;
  }
  100% {
    opacity: 1;
    text-shadow:
      0 0 15px #00d4ff,
      0 0 30px #00d4ff,
      0 0 60px #00d4ff;
  }
}

/* 波浪 */
.wave-text {
  font-weight: 900;
  display: flex;
}
.wave-text span {
  display: inline-block;
  animation: wave 1.5s ease-in-out infinite;
}

@keyframes wave {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* 跳动 */
.bounce-text {
  font-weight: 900;
  display: flex;
}
.bounce-text span {
  display: inline-block;
  animation: bounce 0.8s ease-in-out infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-30px) scale(1.1);
  }
}

/* 流光 */
.shimmer-text {
  font-weight: 900;
  background: linear-gradient(90deg, #000 0%, #000 40%, #00d4ff 50%, #000 60%, #000 100%);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 2s linear infinite;
}

@keyframes shimmer {
  0% {
    background-position: 300% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* 旋转 */
.rotate-text {
  font-weight: 900;
  display: inline-block;
  animation: rotate 3s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}

/* 渐变移动 */
.gradient-move {
  font-weight: 900;
  background: linear-gradient(135deg, #ff6b6b, #ffd93d, #6bcb77, #4d96ff, #9b59b6);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientMove 3s ease infinite;
}

@keyframes gradientMove {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* 闪烁 */
.sparkle-text {
  font-weight: 900;
  display: flex;
}
.sparkle-text span {
  display: inline-block;
  animation: sparkle 1.5s ease-in-out infinite;
}

@keyframes sparkle {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(0.8);
  }
}
</style>
