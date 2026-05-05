<template>
  <div class="unity-container" ref="container" :class="{ 'is-fake-fullscreen': isFullscreen }">
    <div v-if="loading" class="unity-loader">
      <div class="loader-content">
        <div class="spinner"></div>
        <p class="font-rajdhani">Loading Game... {{ Math.round(progress * 100) }}%</p>
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: (progress * 100) + '%' }"></div>
        </div>
      </div>
    </div>
    <canvas id="unity-canvas" ref="canvas" :class="{ 'focused': isFocused }"></canvas>

    <!-- Focus Overlay for Mobile Scrolling -->
    <div v-if="!isFocused && !loading" class="focus-overlay" @click="handleFocus">
      <div class="focus-content">
        <div class="focus-icon">
          <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
            <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
          </svg>
        </div>
        <p class="font-rajdhani">Tap to Play</p>
      </div>
    </div>

    <div class="unity-footer" v-if="!loading">
      <button @click="toggleFullscreen" class="fullscreen-btn">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
        </svg>
      </button>
    </div>
    
    <!-- Orientation Warning for Mobile -->
    <OrientationWarning :requiredOrientation="orientation" />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import OrientationWarning from './OrientationWarning.vue'

const props = defineProps({
  config: {
    type: Object,
    required: true
  },
  orientation: {
    type: String,
    default: 'landscape'
  },
  ratio: {
    type: String,
    default: '16 / 9'
  }
})

const container = ref(null)
const canvas = ref(null)
const loading = ref(true)
const progress = ref(0)
const isFullscreen = ref(false)
const isFocused = ref(false)
let unityInstance = null

const loadUnity = () => {
  if (window.createUnityInstance) {
    initializeUnity()
    return
  }

  const existingScript = document.querySelector(`script[src="${props.config.loader}"]`)
  if (existingScript) {
    existingScript.addEventListener('load', initializeUnity)
    return
  }

  const script = document.createElement('script')
  script.src = props.config.loader
  script.onload = initializeUnity
  script.onerror = () => {
    alert('Failed to load the game engine. Please ensure the build files exist at: ' + props.config.loader)
  }
  document.body.appendChild(script)
}

const initializeUnity = () => {
  if (!window.createUnityInstance) {
    setTimeout(initializeUnity, 100)
    return
  }

  window.createUnityInstance(canvas.value, {
    dataUrl: props.config.data,
    frameworkUrl: props.config.framework,
    codeUrl: props.config.code,
    streamingAssetsUrl: props.config.streamingAssets || "StreamingAssets",
    companyName: "Gumiho Studio",
    productName: "Game",
    productVersion: "1.0",
  }, (p) => {
    progress.value = p
  }).then((instance) => {
    unityInstance = instance
    loading.value = false
  }).catch((message) => {
    console.error('Unity creation error:', message)
  })
}

const toggleFullscreen = () => {
  const elem = container.value
  if (!elem) return

  const isFs = !!(document.fullscreenElement || document.webkitFullscreenElement)

  if (!isFs && !isFullscreen.value) {
    // Try native fullscreen
    if (elem.requestFullscreen) {
      elem.requestFullscreen().catch(() => {
        // Fallback to fake fullscreen if native fails
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
  loadUnity()
  
  const handleFsChange = () => {
    const isFs = !!(document.fullscreenElement || document.webkitFullscreenElement)
    isFullscreen.value = isFs
    if (isFs) isFocused.value = true
  }
  
  const handleOutsideClick = (e) => {
    if (container.value && !container.value.contains(e.target)) {
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
    
    if (unityInstance) {
      unityInstance.Quit().then(() => {
        unityInstance = null
      })
    }
  })
})
</script>

<style scoped>
.unity-player-wrapper {
  width: 100%;
  max-width: v-bind('orientation === "portrait" ? "450px" : "1100px"');
  margin: 0 auto;
}

.unity-container {
  position: relative;
  width: 100%;
  /* Magic formula: clamp width to parent, max 1100px, or the width that makes height exactly 80vh */
  max-width: min(100%, 1100px, calc(80vh * (v-bind(ratio))));
  aspect-ratio: v-bind(ratio);
  margin: 0 auto;
  background: #000;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(176, 74, 255, 0.2);
  transition: all 0.3s ease;
}

.unity-container.is-fake-fullscreen {
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

@media (max-width: 768px) {
  .unity-player-wrapper {
    max-width: 100%;
    padding: 0;
  }
  
  .unity-container {
    border-radius: 0;
    border-left: none;
    border-right: none;
  }
}

#unity-canvas {
  width: 100%;
  height: 100%;
  display: block;
  pointer-events: none;
}

#unity-canvas.focused {
  pointer-events: auto;
}

.focus-overlay {
  position: absolute;
  inset: 0;
  background: rgba(13, 13, 31, 0.4);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 15;
  cursor: pointer;
  transition: all 0.3s ease;
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

.unity-loader {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0d0d1f;
  z-index: 10;
}

.loader-content {
  text-align: center;
  width: 80%;
  max-width: 400px;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(176, 74, 255, 0.1);
  border-left-color: #b04aff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1.5rem;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

p {
  color: #f0eaff;
  margin-bottom: 1rem;
  letter-spacing: 0.1em;
}

.progress-bar {
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #b04aff, #00d4ff);
  transition: width 0.3s ease;
}

.unity-footer {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  z-index: 5;
}

.fullscreen-btn {
  background: rgba(13, 13, 31, 0.8);
  border: 1px solid rgba(176, 74, 255, 0.3);
  color: #f0eaff;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.fullscreen-btn:hover {
  background: #b04aff;
  transform: scale(1.1);
}
</style>
