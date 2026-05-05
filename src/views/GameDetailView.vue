<template>
  <div class="game-detail" style="padding-top:90px;min-height:100vh;">

    <!-- Not found -->
    <div v-if="!game" style="text-align:center;padding:8rem 1rem;">
      <div style="font-size:4rem;margin-bottom:1rem;">👻</div>
      <h2 class="font-cinzel" style="color:#f0eaff;margin-bottom:1rem;">Game Not Found</h2>
      <RouterLink to="/games" class="btn-primary">← Back to Games</RouterLink>
    </div>

    <!-- Game Player Section -->
    <div v-if="showPlayer && (game.webgl || game.cocosUrl || game.iframeUrl)" class="player-section-container">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;padding:0 1.5rem;">
        <h3 class="font-cinzel" style="color:#b04aff;margin:0;">Playing: {{ game.name }}</h3>
        <button @click="showPlayer = false" class="btn-outline" style="padding:0.5rem 1rem;">Close Game</button>
      </div>

      <div class="player-content-wrapper">
        <UnityPlayer 
          v-if="game.engine.includes('Unity')" 
          :config="game.webgl" 
          :orientation="game.orientation"
          :ratio="game.aspectRatio"
        />
        <CocosPlayer 
          v-else-if="game.engine === 'Cocos' || game.iframeUrl" 
          :url="game.iframeUrl || game.cocosUrl" 
          :ratio="game.aspectRatio" 
          :orientation="game.orientation"
        />
      </div>
    </div>

    <!-- Game detail -->
    <div v-else-if="game" style="max-width:1100px;margin:0 auto;padding:2rem 1.5rem 5rem;">

      <!-- Back -->
      <RouterLink to="/games" class="btn-outline" style="margin-bottom:2rem;display:inline-flex;">
        ← Back to Games
      </RouterLink>

      <!-- Banner -->
      <div class="detail-banner" style="margin-bottom:2.5rem;">
        <img :src="game.banner" :alt="game.name"
          @error="e => e.target.src = 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=1200&q=80'" />
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
            <h3 class="font-rajdhani"
              style="font-size:1rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#00d4ff;margin:0 0 1rem;">
              About the Game
            </h3>
            <p style="color:#a098c0;line-height:1.8;font-size:.95rem;">{{ game.description }}</p>
          </div>

          <!-- Features -->
          <div class="border-glow" style="background:#0d0d1f;border-radius:16px;padding:1.75rem;margin-bottom:1.75rem;">
            <h3 class="font-rajdhani"
              style="font-size:1rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#ff4af0;margin:0 0 1rem;">
              Key Features
            </h3>
            <div v-for="feat in game.features" :key="feat" class="feature-item">
              <span style="color:#b04aff;font-size:1rem;flex-shrink:0;margin-top:.1rem;">✦</span>
              <span style="color:#a098c0;font-size:.9rem;">{{ feat }}</span>
            </div>
          </div>

          <!-- Screenshots -->
          <div style="background:#0d0d1f;border:1px solid rgba(176,74,255,.15);border-radius:16px;padding:1.75rem;">
            <h3 class="font-rajdhani"
              style="font-size:1rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#b04aff;margin:0 0 1rem;">
              Screenshots
            </h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:.75rem;">
              <img v-for="(ss, i) in game.screenshots" :key="i" :src="ss" :alt="'Screenshot ' + (i + 1)"
                class="gallery-thumb" loading="lazy" @click="lightboxSrc = ss"
                @error="e => e.target.src = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80'" />
            </div>
          </div>
        </div>

        <!-- ── Right sidebar ── -->
        <div>
          <!-- Download -->
          <div class="border-glow" style="background:#0d0d1f;border-radius:16px;padding:1.75rem;margin-bottom:1.5rem;">
            <h3 class="font-rajdhani"
              style="font-size:.9rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#8a80aa;margin:0 0 1.2rem;">
              Play & Download
            </h3>

            <!-- External Game Link -->
            <a v-if="game.iframeUrl" :href="game.iframeUrl" target="_blank" class="btn-primary"
              style="width:100%;justify-content:center;margin-bottom:.75rem;border-radius:10px;background:linear-gradient(135deg, #b04aff, #7026ff);text-decoration:none;">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" style="margin-right:8px;">
                <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7z" />
              </svg>
              Play (Opens New Tab)
            </a>

            <!-- Local Game Player -->
            <button v-else-if="game.webgl || game.cocosUrl" @click="showPlayer = true" class="btn-primary"
              style="width:100%;justify-content:center;margin-bottom:.75rem;border-radius:10px;background:linear-gradient(135deg, #b04aff, #7026ff);">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" style="margin-right:8px;">
                <path d="M8 5v14l11-7z" />
              </svg>
              Play in Browser
            </button>

            <a :href="game.links.playstore" class="btn-primary"
              style="width:100%;justify-content:center;margin-bottom:.75rem;border-radius:10px;">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M3.18 23.76a2.5 2.5 0 01-.68-.1L13.88 12 3.18.34a2.5 2.5 0 01.69-.1c.46 0 .93.12 1.35.38l12.2 6.93-3.63 3.63L3.18 23.76z" />
                <path
                  d="M2.06 23.1L12.47 12 2.06.9A2.5 2.5 0 001 3v18a2.5 2.5 0 001.06 2.1zM20.5 10.17l-2.28-1.3L14.7 12l3.52 3.13 2.28-1.3A2.5 2.5 0 0020.5 10.17z" />
              </svg>
              Google Play
            </a>
            <a :href="game.links.appstore" class="btn-outline"
              style="width:100%;justify-content:center;border-radius:10px;margin-bottom:1.5rem;">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </a>

            <!-- Privacy Policy -->
            <RouterLink :to="'/game/' + game.id + '/privacy'" 
              style="display:flex;align-items:center;justify-content:center;width:100%;padding:0.75rem;background:rgba(13,13,31,0.5);border:1px solid rgba(0,212,255,0.2);border-radius:10px;color:#00d4ff;font-family:'Rajdhani',sans-serif;font-weight:700;font-size:0.9rem;letter-spacing:0.1em;text-transform:uppercase;text-decoration:none;transition:all 0.3s ease;box-shadow:0 4px 12px rgba(0,0,0,0.2);"
              onmouseover="this.style.background='rgba(0,212,255,0.1)';this.style.borderColor='rgba(0,212,255,0.5)';this.style.transform='translateY(-2px)';"
              onmouseout="this.style.background='rgba(13,13,31,0.5)';this.style.borderColor='rgba(0,212,255,0.2)';this.style.transform='none';">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" style="margin-right:8px;">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
              </svg>
              Privacy Policy
            </RouterLink>
          </div>

          <!-- Info -->
          <div style="background:#0d0d1f;border:1px solid rgba(176,74,255,.15);border-radius:16px;padding:1.75rem;">
            <h3 class="font-rajdhani"
              style="font-size:.9rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#8a80aa;margin:0 0 1rem;">
              Game Info
            </h3>
            <div v-for="info in gameInfo" :key="info.label"
              style="display:flex;justify-content:space-between;padding:.6rem 0;border-bottom:1px solid rgba(176,74,255,.08);">
              <span style="color:#8a80aa;font-size:.85rem;font-family:'Rajdhani',sans-serif;font-weight:600;">{{
                info.label
                }}</span>
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
import { games } from '../data/games'
import LightboxModal from '../components/LightboxModal.vue'
import UnityPlayer from '../components/UnityPlayer.vue'
import CocosPlayer from '../components/CocosPlayer.vue'

const route = useRoute()
const lightboxSrc = ref(null)
const showPlayer = ref(false)

const game = computed(() => games.find(g => g.id === parseInt(route.params.id)) || null)

const gameInfo = computed(() => game.value ? [
  { label: 'Category', val: game.value.category },
  { label: 'Engine', val: game.value.engine },
  { label: 'Year', val: game.value.year },
  { label: 'Platform', val: 'iOS + Android' }
] : [])
</script>

<style scoped>
.player-section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.5rem 2rem;
}

@media (max-width: 768px) {
  .player-section-container {
    padding: 1rem 0 2rem;
  }
}

.detail-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2.5rem;
}

@media (max-width: 768px) {
  .detail-grid {
    grid-template-columns: 1fr;
  }
}
</style>
