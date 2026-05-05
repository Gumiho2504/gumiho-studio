<template>
  <div v-if="showWarning" class="orientation-warning">
    <div class="warning-content">
      <div class="phone-icon" :class="requiredOrientation">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      </div>
      <h2>Please Rotate Your Device</h2>
      <p>This game is best experienced in <strong>{{ requiredOrientation }}</strong> mode.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  requiredOrientation: {
    type: String,
    default: 'landscape' // 'landscape' or 'portrait'
  }
})

const showWarning = ref(false)

const checkOrientation = () => {
  if (!window.matchMedia("(max-width: 1024px)").matches) {
    showWarning.value = false
    return
  }

  const isLandscape = window.innerWidth > window.innerHeight
  
  if (props.requiredOrientation === 'landscape') {
    showWarning.value = !isLandscape
  } else {
    showWarning.value = isLandscape
  }
}

onMounted(() => {
  checkOrientation()
  window.addEventListener('resize', checkOrientation)
  window.addEventListener('orientationchange', checkOrientation)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkOrientation)
  window.removeEventListener('orientationchange', checkOrientation)
})
</script>

<style scoped>
.orientation-warning {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 12, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  padding: 2rem;
}

.warning-content h2 {
  font-family: 'Cinzel', serif;
  color: #b04aff;
  margin: 1.5rem 0 0.5rem;
  font-size: 1.5rem;
}

.warning-content p {
  color: #a0a0a8;
  font-size: 1rem;
}

.phone-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto;
  color: #b04aff;
  animation: rotatePhone 2s ease-in-out infinite;
}

.phone-icon.landscape {
  transform: rotate(90deg);
}

@keyframes rotatePhone {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(90deg); }
}

.phone-icon.portrait {
  animation: rotatePhoneReverse 2s ease-in-out infinite;
}

@keyframes rotatePhoneReverse {
  0%, 100% { transform: rotate(90deg); }
  50% { transform: rotate(0deg); }
}
</style>
