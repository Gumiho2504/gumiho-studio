<template>
  <canvas ref="canvasRef" id="particle-canvas" />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const canvasRef = ref(null)
let animFrame = null

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')

  const resize = () => {
    canvas.width  = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
  }
  resize()
  window.addEventListener('resize', resize)

  const COLORS = [
    'rgba(176,74,255,',
    'rgba(0,212,255,',
    'rgba(255,74,240,'
  ]

  const pts = Array.from({ length: 65 }, (_, i) => ({
    x:     Math.random() * canvas.width,
    y:     Math.random() * canvas.height,
    r:     Math.random() * 1.5 + 0.3,
    vx:    (Math.random() - 0.5) * 0.25,
    vy:    (Math.random() - 0.5) * 0.25,
    alpha: Math.random() * 0.5 + 0.2,
    col:   COLORS[i % 3]
  }))

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i]
      p.x += p.vx; p.y += p.vy
      if (p.x < 0) p.x = canvas.width
      if (p.x > canvas.width)  p.x = 0
      if (p.y < 0) p.y = canvas.height
      if (p.y > canvas.height) p.y = 0

      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fillStyle = p.col + p.alpha + ')'
      ctx.fill()

      for (let j = i + 1; j < pts.length; j++) {
        const q = pts[j]
        const dx = p.x - q.x, dy = p.y - q.y
        const d  = Math.sqrt(dx * dx + dy * dy)
        if (d < 100) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(q.x, q.y)
          ctx.strokeStyle = p.col + (0.12 * (1 - d / 100)) + ')'
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }
    }
    animFrame = requestAnimationFrame(draw)
  }
  draw()

  onBeforeUnmount(() => {
    cancelAnimationFrame(animFrame)
    window.removeEventListener('resize', resize)
  })
})
</script>
