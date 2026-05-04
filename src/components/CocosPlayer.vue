<template>
  <div class="cocos-player-wrapper">
    <div class="cocos-container shadow-2xl rounded-xl overflow-hidden bg-black border border-white/10">
      
      <!-- Loading Overlay -->
      <Transition name="fade">
        <div v-if="isLoading" class="loading-overlay">
          <div class="loader-content">
            <div class="spinner"></div>
            <p class="font-cinzel">Loading Game Experience...</p>
          </div>
        </div>
      </Transition>

      <iframe
        ref="cocosFrame"
        :src="url"
        class="cocos-iframe"
        allow="autoplay; fullscreen; keyboard"
        frameborder="0"
        @load="onFrameLoad"
      ></iframe>
      
      <!-- Fullscreen Toggle -->
      <button 
        @click="toggleFullscreen"
        class="fullscreen-btn"
        title="Toggle Fullscreen"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  url: {
    type: String,
    required: true
  },
  ratio: {
    type: String,
    default: '16 / 9'
  }
})

const cocosFrame = ref(null)
const isLoading = ref(true)

const onFrameLoad = () => {
  isLoading.value = false
}

const toggleFullscreen = () => {
  if (!cocosFrame.value) return
  if (cocosFrame.value.requestFullscreen) {
    cocosFrame.value.requestFullscreen()
  } else if (cocosFrame.value.webkitRequestFullscreen) {
    cocosFrame.value.webkitRequestFullscreen()
  }
}
</script>

<style scoped>
.cocos-player-wrapper {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.cocos-container {
  position: relative;
  width: 100%;
  aspect-ratio: v-bind(ratio);
  background: #000;
  box-shadow: 0 0 40px rgba(176, 74, 255, 0.15);
}

.cocos-iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.loading-overlay {
  position: absolute;
  inset: 0;
  background: #0a0a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
}

.loader-content {
  text-align: center;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 3px solid rgba(176, 74, 255, 0.2);
  border-top-color: #b04aff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1.5rem;
}

.loading-overlay p {
  color: #b04aff;
  letter-spacing: 0.2em;
  font-size: 0.9rem;
  text-transform: uppercase;
}

.fullscreen-btn {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  z-index: 10;
  backdrop-filter: blur(8px);
}

.fullscreen-btn:hover {
  background: rgba(176, 74, 255, 0.4);
  transform: scale(1.1);
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-leave-to {
  opacity: 0;
}
</style>
