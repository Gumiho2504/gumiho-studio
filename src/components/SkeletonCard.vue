<template>
  <div class="game-card skeleton-card">
    <!-- Thumbnail Skeleton -->
    <div class="thumb-wrap shimmer" style="aspect-ratio: 16/9; width: 100%; border-bottom: 1px solid rgba(176,74,255,.1);"></div>

    <!-- Body Skeleton -->
    <div style="padding:1.2rem; position:relative; z-index:1;">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:.5rem;margin-bottom:.6rem;">
        <div class="shimmer" style="height: 1.2rem; width: 60%; border-radius: 4px;"></div>
        <div class="shimmer" style="height: 0.8rem; width: 15%; border-radius: 4px;"></div>
      </div>
      <div class="shimmer" style="height: 0.8rem; width: 40%; border-radius: 4px; margin-bottom: 1rem;"></div>
      
      <div class="shimmer" style="height: 0.8rem; width: 100%; border-radius: 4px; margin-bottom: 0.5rem;"></div>
      <div class="shimmer" style="height: 0.8rem; width: 85%; border-radius: 4px; margin-bottom: 1.5rem;"></div>
      
      <div class="shimmer" style="height: 2.2rem; width: 100%; border-radius: 8px;"></div>
    </div>
  </div>
</template>

<style scoped>
.skeleton-card {
  cursor: default;
  pointer-events: none;
}
.skeleton-card:hover {
  transform: none;
  box-shadow: none;
  border-color: rgba(176,74,255,.15);
}
.shimmer {
  background: rgba(176, 74, 255, 0.08);
  background-image: linear-gradient(
    90deg,
    rgba(176, 74, 255, 0.0) 0%,
    rgba(176, 74, 255, 0.15) 50%,
    rgba(176, 74, 255, 0.0) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
</style>
