<template>
  <div class="unity-container" ref="container">
    <div v-if="loading" class="unity-loader">
      <div class="loader-content">
        <div class="spinner"></div>
        <p class="font-rajdhani">Loading Game... {{ Math.round(progress * 100) }}%</p>
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: (progress * 100) + '%' }"></div>
        </div>
      </div>
    </div>
    <canvas id="unity-canvas" ref="canvas"></canvas>
    <div class="unity-footer" v-if="!loading">
      <button @click="toggleFullscreen" class="fullscreen-btn">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  config: {
    type: Object,
    required: true
  }
})

const container = ref(null)
const canvas = ref(null)
const loading = ref(true)
const progress = ref(0)
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
  if (unityInstance) {
    unityInstance.SetFullscreen(1)
  }
}

onMounted(() => {
  loadUnity()
})

onBeforeUnmount(() => {
  if (unityInstance) {
    unityInstance.Quit().then(() => {
      unityInstance = null
    })
  }
})
</script>

<style scoped>
.unity-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #000;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(176, 74, 255, 0.2);
}

#unity-canvas {
  width: 100%;
  height: 100%;
  display: block;
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
