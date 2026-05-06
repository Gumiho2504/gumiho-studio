<script setup>
import { shallowRef, ref, onMounted, onBeforeUnmount } from 'vue'
import { TresCanvas } from '@tresjs/core'
import * as THREE from 'three'

// Create a simple starfield
const starsCount = 500
const starsGeometry = new THREE.BufferGeometry()
const starsMaterial = new THREE.PointsMaterial({
  color: 0xffffff,
  size: 0.05,
  transparent: true,
  opacity: 0.8
})

const positions = new Float32Array(starsCount * 3)
for (let i = 0; i < starsCount * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 20
}
starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

// References for animation
const gemRef = shallowRef(null)
const ringRef = shallowRef(null)
const starsRef = shallowRef(null)

let animFrame = null
let clock = new THREE.Clock()

onMounted(() => {
  const draw = () => {
    const delta = clock.getDelta()
    const elapsed = clock.getElapsedTime()

    if (gemRef.value) {
      gemRef.value.rotation.y += delta * 0.5
      gemRef.value.rotation.x += delta * 0.2
      gemRef.value.position.y = Math.sin(elapsed * 1.5) * 0.2
    }
    
    if (ringRef.value) {
      ringRef.value.rotation.z -= delta * 0.3
      ringRef.value.rotation.x = Math.PI / 2 + Math.sin(elapsed * 0.5) * 0.2
    }

    if (starsRef.value) {
      starsRef.value.rotation.y += delta * 0.05
    }

    animFrame = requestAnimationFrame(draw)
  }
  draw()
})

onBeforeUnmount(() => {
  if (animFrame) cancelAnimationFrame(animFrame)
})
</script>

<template>
  <div class="canvas-container">
    <TresCanvas clear-color="#060612" alpha window-size>
      <TresPerspectiveCamera :position="[0, 0, 7]" :look-at="[0, 0, 0]" />
      
      <!-- Stars -->
      <primitive :object="new THREE.Points(starsGeometry, starsMaterial)" ref="starsRef" />

      <!-- Center Gem -->
      <TresMesh ref="gemRef" :position="[0, 0, 0]">
        <TresIcosahedronGeometry :args="[1.5, 0]" />
        <TresMeshPhysicalMaterial 
          color="#b04aff" 
          :metalness="0.5" 
          :roughness="0.1" 
          :transmission="0.9" 
          :thickness="1.5"
          :wireframe="false"
        />
      </TresMesh>

      <!-- Inner Wireframe Gem -->
      <TresMesh>
        <TresIcosahedronGeometry :args="[1.4, 0]" />
        <TresMeshBasicMaterial color="#00d4ff" :wireframe="true" :transparent="true" :opacity="0.3" />
      </TresMesh>

      <!-- Rotating Orbit Ring -->
      <TresMesh ref="ringRef" :rotation="[Math.PI / 2, 0, 0]">
        <TresTorusGeometry :args="[2.5, 0.02, 16, 100]" />
        <TresMeshStandardMaterial color="#ff4af0" :emissive="new THREE.Color('#ff4af0')" :emissiveIntensity="0.5" />
      </TresMesh>
      
      <!-- Lighting -->
      <TresAmbientLight :intensity="1" color="#ffffff" />
      <TresDirectionalLight :position="[5, 5, 5]" :intensity="2" color="#b04aff" />
      <TresPointLight :position="[-5, -5, 5]" :intensity="2" color="#00d4ff" />
      <TresPointLight :position="[0, 3, -5]" :intensity="1" color="#ff4af0" />
    </TresCanvas>
  </div>
</template>

<style scoped>
.canvas-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none; /* Let clicks pass through to UI */
}
</style>
