<template>
  <div class="game-start-screen" :style="{ backgroundImage: `url(${game.banner})` }">
    <div class="overlay">
      <div class="content">
        <div class="badge">{{ game.engine }} Engine</div>
        <h1 class="font-cinzel">{{ game.name }}</h1>
        <p class="tagline">{{ game.tagline }}</p>
        
        <div class="stats">
          <div class="stat-item">
            <span class="label">Category</span>
            <span class="value">{{ game.category }}</span>
          </div>
          <div class="stat-item">
            <span class="label">Year</span>
            <span class="value">{{ game.year }}</span>
          </div>
          <div class="stat-item">
            <span class="label">Format</span>
            <span class="value">{{ game.orientation }}</span>
          </div>
        </div>

        <button @click="$emit('start')" class="start-btn">
          <span>Start Game</span>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>

        <p class="hint">Best experienced on mobile & tablet</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  game: {
    type: Object,
    required: true
  }
})

defineEmits(['start'])
</script>

<style scoped>
.game-start-screen {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, #0a0a0c 20%, rgba(10, 10, 12, 0.4));
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.content {
  text-align: center;
  max-width: 500px;
}

.badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: rgba(176, 74, 255, 0.2);
  border: 1px solid rgba(176, 74, 255, 0.3);
  border-radius: 20px;
  color: #b04aff;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #fff;
  text-shadow: 0 4px 20px rgba(0,0,0,0.5);
}

.tagline {
  color: #a0a0a8;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2.5rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 12px;
  backdrop-filter: blur(5px);
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.label {
  font-size: 0.7rem;
  text-transform: uppercase;
  color: #666;
  letter-spacing: 1px;
}

.value {
  font-weight: 600;
  color: #fff;
}

.start-btn {
  background: #b04aff;
  color: #fff;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0 auto;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(176, 74, 255, 0.3);
}

.start-btn:hover {
  transform: translateY(-5px);
  background: #c06aff;
  box-shadow: 0 15px 40px rgba(176, 74, 255, 0.4);
}

.hint {
  margin-top: 1.5rem;
  font-size: 0.8rem;
  color: #555;
}

@media (max-width: 768px) {
  h1 { font-size: 1.8rem; }
  .stats { gap: 1rem; }
}
</style>
