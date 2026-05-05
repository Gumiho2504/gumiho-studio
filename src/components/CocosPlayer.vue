<template>
  <div class="cocos-player-wrapper">
    <div ref="cocosContainer" class="cocos-container shadow-2xl rounded-xl overflow-hidden bg-black border border-white/10" :class="{ 'is-fake-fullscreen': isFullscreen }">
      
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
        :class="{ 'focused': isFocused }"
        allow="autoplay; fullscreen; keyboard"
        frameborder="0"
        @load="onFrameLoad"
      ></iframe>

      <!-- Focus Overlay for Mobile Scrolling -->
      <div v-if="!isFocused && !isLoading" class="focus-overlay" @click="handleFocus">
        <div class="focus-content">
          <div class="focus-icon">
            <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
              <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
            </svg>
          </div>
          <p class="font-cinzel">Tap to Play</p>
        </div>
      </div>
      
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

      <!-- Orientation Warning for Mobile -->
      <OrientationWarning :requiredOrientation="orientation" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import OrientationWarning from './OrientationWarning.vue'

const props = defineProps({
  url: {
    type: String,
    required: true
  },
  ratio: {
    type: String,
    default: '16 / 9'
  },
  orientation: {
    type: String,
    default: 'landscape'
  }
})

const cocosFrame = ref(null)
const cocosContainer = ref(null)
const isLoading = ref(true)
const isFullscreen = ref(false)
const isFocused = ref(false)

const onFrameLoad = () => {
  isLoading.value = false
}

const toggleFullscreen = () => {
  const elem = cocosContainer.value
  if (!elem) return

  const isFs = !!(document.fullscreenElement || document.webkitFullscreenElement)

  if (!isFs && !isFullscreen.value) {
    // Try native fullscreen
    if (elem.requestFullscreen) {
      elem.requestFullscreen().catch(() => {
        isFullscreen.value = true
      })
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen()
    } else {
      // Fake fullscreen fallback (e.g. iPhone)
      isFullscreen.value = true
    }
  } else {
    // Exit fullscreen
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    }
    isFullscreen.value = false
  }
}

const handleFocus = () => {
  isFocused.value = true
}

onMounted(() => {
  const handleFsChange = () => {
    const isFs = !!(document.fullscreenElement || document.webkitFullscreenElement)
    isFullscreen.value = isFs
    if (isFs) isFocused.value = true
  }
  
  const handleOutsideClick = (e) => {
    if (cocosContainer.value && !cocosContainer.value.contains(e.target)) {
      isFocused.value = false
    }
  }

  document.addEventListener('fullscreenchange', handleFsChange)
  document.addEventListener('webkitfullscreenchange', handleFsChange)
  document.addEventListener('mousedown', handleOutsideClick)
  document.addEventListener('touchstart', handleOutsideClick)
  
  onBeforeUnmount(() => {
    document.removeEventListener('fullscreenchange', handleFsChange)
    document.removeEventListener('webkitfullscreenchange', handleFsChange)
    document.removeEventListener('mousedown', handleOutsideClick)
    document.removeEventListener('touchstart', handleOutsideClick)
  })
})
</script>

<style scoped>
.cocos-player-wrapper {
  width: 100%;
  max-width: v-bind('orientation === "portrait" ? "450px" : "1200px"');
  margin: 0 auto;
}

.cocos-container {
  position: relative;
  width: 100%;
  max-width: min(100%, 1100px, calc(80vh * (v-bind(ratio))));
  aspect-ratio: v-bind(ratio);
  margin: 0 auto;
  background: #000;
  box-shadow: 0 0 40px rgba(176, 74, 255, 0.15);
  transition: all 0.3s ease;
}

.cocos-container.is-fake-fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  border-radius: 0;
  aspect-ratio: auto;
  max-height: none;
}

.cocos-iframe {
  width: 100%;
  height: 100%;
  border: none;
  pointer-events: none;
}

.cocos-iframe.focused {
  pointer-events: auto;
}

.focus-overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 10, 26, 0.4);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 15;
  cursor: pointer;
}

.focus-content {
  text-align: center;
  color: #b04aff;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
}

.focus-icon {
  background: rgba(176, 74, 255, 0.2);
  padding: 1rem;
  border-radius: 50%;
  border: 2px solid #b04aff;
  margin-bottom: 1rem;
}

.focus-content p {
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin: 0;
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

@media (max-width: 768px) {
  .cocos-player-wrapper {
    max-width: 100%;
    padding: 0;
  }
  
  .cocos-container {
    border-radius: 0;
    border-left: none;
    border-right: none;
  }
  
  .fullscreen-btn {
    bottom: 0.5rem;
    right: 0.5rem;
    width: 35px;
    height: 35px;
  }
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
