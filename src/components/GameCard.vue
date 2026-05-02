<template>
  <div class="game-card" @click="$emit('view', game.id)">
    <!-- Thumbnail -->
    <div class="thumb-wrap">
      <img
        :src="game.thumb"
        :alt="game.name"
        class="card-thumb"
        loading="lazy"
        @error="onImgError"
      />
      <div style="position:absolute;top:.75rem;left:.75rem;">
        <span :class="`badge badge-${game.category.toLowerCase()}`">{{ game.category }}</span>
      </div>
      <div style="position:absolute;top:.75rem;right:.75rem;background:rgba(6,6,18,.7);border-radius:6px;padding:.2rem .5rem;">
        <span style="color:#8a80aa;font-size:.75rem;font-family:'Rajdhani',sans-serif;font-weight:600;">
          {{ game.engine }}
        </span>
      </div>
    </div>

    <!-- Body -->
    <div style="padding:1.2rem;position:relative;z-index:1;">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:.5rem;margin-bottom:.4rem;">
        <h3 style="font-family:'Cinzel Decorative',cursive;font-size:1.05rem;font-weight:700;color:#f0eaff;margin:0;">
          {{ game.name }}
        </h3>
        <span style="color:#8a80aa;font-size:.78rem;font-family:'Rajdhani',sans-serif;white-space:nowrap;padding-top:.15rem;">
          {{ game.year }}
        </span>
      </div>
      <p style="color:#8a80aa;font-size:.82rem;font-style:italic;margin:0 0 .75rem;line-height:1.4;">
        {{ game.tagline }}
      </p>
      <p style="color:#a098c0;font-size:.87rem;line-height:1.6;margin:0 0 1rem;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">
        {{ game.description }}
      </p>
      <button class="btn-outline" style="width:100%;justify-content:center;font-size:.82rem;">
        View Details →
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({ game: { type: Object, required: true } })
defineEmits(['view'])

function onImgError(e) {
  e.target.src = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80'
}
</script>
