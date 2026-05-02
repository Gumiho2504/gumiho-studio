<template>
  <div style="padding-top:90px;min-height:100vh;">

    <!-- Not found -->
    <div v-if="!game" style="text-align:center;padding:8rem 1rem;">
      <div style="font-size:4rem;margin-bottom:1rem;">👻</div>
      <h2 class="font-cinzel" style="color:#f0eaff;margin-bottom:1rem;">Game Not Found</h2>
      <RouterLink to="/games" class="btn-primary">← Back to Games</RouterLink>
    </div>

    <!-- Game detail -->
    <div v-else style="max-width:1100px;margin:0 auto;padding:2rem 1.5rem 5rem;">

      <!-- Back -->
      <RouterLink to="/games" class="btn-outline" style="margin-bottom:2rem;display:inline-flex;">
        ← Back to Games
      </RouterLink>

      <!-- Banner -->
      <div class="detail-banner" style="margin-bottom:2.5rem;">
        <img
          :src="game.banner"
          :alt="game.name"
          @error="e => e.target.src = 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=1200&q=80'"
        />
        <div class="detail-banner-overlay" />
        <div style="position:relative;z-index:2;padding:2rem;width:100%;">
          <span :class="`badge badge-${game.category.toLowerCase()}`" style="margin-bottom:.75rem;display:inline-flex;">
            {{ game.category }}
          </span>
          <h1 class="font-cinzel glow-purple" style="font-size:clamp(2rem,5vw,3.5rem);font-weight:900;margin:.25rem 0;">
            {{ game.name }}
          </h1>
          <p class="font-rajdhani" style="color:#c4b8e8;font-size:1.1rem;font-style:italic;margin:0;">
            {{ game.tagline }}
          </p>
        </div>
      </div>

      <!-- Content grid -->
      <div class="detail-grid">

        <!-- ── Left column ── -->
        <div>
          <!-- Description -->
          <div class="border-glow" style="background:#0d0d1f;border-radius:16px;padding:1.75rem;margin-bottom:1.75rem;">
            <h3 class="font-rajdhani" style="font-size:1rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#00d4ff;margin:0 0 1rem;">
              About the Game
            </h3>
            <p style="color:#a098c0;line-height:1.8;font-size:.95rem;">{{ game.description }}</p>
          </div>

          <!-- Features -->
          <div class="border-glow" style="background:#0d0d1f;border-radius:16px;padding:1.75rem;margin-bottom:1.75rem;">
            <h3 class="font-rajdhani" style="font-size:1rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#ff4af0;margin:0 0 1rem;">
              Key Features
            </h3>
            <div v-for="feat in game.features" :key="feat" class="feature-item">
              <span style="color:#b04aff;font-size:1rem;flex-shrink:0;margin-top:.1rem;">✦</span>
              <span style="color:#a098c0;font-size:.9rem;">{{ feat }}</span>
            </div>
          </div>

          <!-- Screenshots -->
          <div style="background:#0d0d1f;border:1px solid rgba(176,74,255,.15);border-radius:16px;padding:1.75rem;">
            <h3 class="font-rajdhani" style="font-size:1rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#b04aff;margin:0 0 1rem;">
              Screenshots
            </h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:.75rem;">
              <img
                v-for="(ss, i) in game.screenshots"
                :key="i"
                :src="ss"
                :alt="'Screenshot ' + (i + 1)"
                class="gallery-thumb"
                loading="lazy"
                @click="lightboxSrc = ss"
                @error="e => e.target.src = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80'"
              />
            </div>
          </div>
        </div>

        <!-- ── Right sidebar ── -->
        <div>
          <!-- Download -->
          <div class="border-glow" style="background:#0d0d1f;border-radius:16px;padding:1.75rem;margin-bottom:1.5rem;">
            <h3 class="font-rajdhani" style="font-size:.9rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#8a80aa;margin:0 0 1.2rem;">
              Download Now
            </h3>
            <a :href="game.links.playstore" class="btn-primary" style="width:100%;justify-content:center;margin-bottom:.75rem;border-radius:10px;">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.18 23.76a2.5 2.5 0 01-.68-.1L13.88 12 3.18.34a2.5 2.5 0 01.69-.1c.46 0 .93.12 1.35.38l12.2 6.93-3.63 3.63L3.18 23.76z"/>
                <path d="M2.06 23.1L12.47 12 2.06.9A2.5 2.5 0 001 3v18a2.5 2.5 0 001.06 2.1zM20.5 10.17l-2.28-1.3L14.7 12l3.52 3.13 2.28-1.3A2.5 2.5 0 0020.5 10.17z"/>
              </svg>
              Google Play
            </a>
            <a
              :href="game.links.appstore"
              class="btn-outline"
              style="width:100%;justify-content:center;border-radius:10px;"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </a>
          </div>

          <!-- Info -->
          <div style="background:#0d0d1f;border:1px solid rgba(176,74,255,.15);border-radius:16px;padding:1.75rem;">
            <h3 class="font-rajdhani" style="font-size:.9rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#8a80aa;margin:0 0 1rem;">
              Game Info
            </h3>
            <div
              v-for="info in gameInfo"
              :key="info.label"
              style="display:flex;justify-content:space-between;padding:.6rem 0;border-bottom:1px solid rgba(176,74,255,.08);"
            >
              <span style="color:#8a80aa;font-size:.85rem;font-family:'Rajdhani',sans-serif;font-weight:600;">{{ info.label }}</span>
              <span style="color:#f0eaff;font-size:.85rem;font-weight:600;">{{ info.val }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <LightboxModal :src="lightboxSrc" @close="lightboxSrc = null" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { games } from '../data/games.js'
import LightboxModal from '../components/LightboxModal.vue'

const route = useRoute()
const lightboxSrc = ref(null)

const game = computed(() => games.find(g => g.id === parseInt(route.params.id)) || null)

const gameInfo = computed(() => game.value ? [
  { label: 'Category', val: game.value.category  },
  { label: 'Engine',   val: game.value.engine     },
  { label: 'Year',     val: game.value.year       },
  { label: 'Platform', val: 'iOS + Android'       }
] : [])
</script>

<style scoped>
.detail-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2.5rem;
}
@media (max-width: 768px) {
  .detail-grid { grid-template-columns: 1fr; }
}
</style>
