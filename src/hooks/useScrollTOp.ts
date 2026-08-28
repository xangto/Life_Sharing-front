import { onMounted, onUnmounted, ref } from 'vue'
import { debounce } from '@/utils/debouns.ts'

export const useScrollTOp = () => {
  const showBackTop = ref(false)
  const scrollYValue = ref(0)

  const scrollToTop = (number = 0) => {
    window.scrollTo({ top: number, behavior: 'smooth' })
  }

  // 滚动回调，防抖间隔 100ms
  const handleScroll = debounce(() => {
    scrollYValue.value = window.scrollY
    showBackTop.value = window.scrollY > 0
    console.log(scrollYValue.value)
  }, 150)

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    showBackTop,
    scrollYValue,
    scrollToTop,
  }
}
