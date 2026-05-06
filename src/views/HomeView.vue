<template>
  <div>
    <!-- ══ HERO ══ -->
    <section class="hero">
      <div class="hero-bg" />
      <div class="grid-lines" />
      <Background3D />

      <!-- Floating orbs -->
      <div class="orb" style="width:400px;height:400px;background:rgba(176,74,255,.07);top:-10%;left:-5%;animation-duration:9s;" />
      <div class="orb" style="width:300px;height:300px;background:rgba(0,212,255,.07);bottom:5%;right:-5%;animation-duration:11s;animation-delay:-4s;" />
      <div class="orb" style="width:200px;height:200px;background:rgba(255,74,240,.07);top:40%;right:15%;animation-duration:7s;animation-delay:-2s;" />

      <div style="position:relative;z-index:10;text-align:center;padding:2rem 1.5rem;max-width:800px;margin:0 auto;">
        <!-- Fox icon -->
        <div style="position:relative;display:inline-block;margin-bottom:2rem;">
          <div class="pulse-ring" style="position:absolute;inset:-20px;border-radius:50%;border:2px solid rgba(176,74,255,.3);" />
          <div style="background:rgba(176,74,255,.08);border-radius:50%;padding:1.5rem;border:1px solid rgba(176,74,255,.2);">
            <FoxLogo :size="80" />
          </div>
        </div>

        <div style="margin-bottom:1rem;">
          <span style="font-family:'Rajdhani',sans-serif;font-size:.85rem;font-weight:700;letter-spacing:.25em;text-transform:uppercase;color:#b04aff;background:rgba(176,74,255,.1);border:1px solid rgba(176,74,255,.25);border-radius:99px;padding:.3rem 1rem;">
            ✦ Indie Game Studio — Cambodia
          </span>
        </div>

        <h1 class="font-cinzel glow-purple" style="font-size:clamp(2.8rem,8vw,5.5rem);font-weight:900;line-height:1.05;margin:.5rem 0;">
          Gumiho<br>
          <span class="grad-text">Studio</span>
        </h1>

        <p class="font-rajdhani" style="font-size:clamp(1.1rem,3vw,1.5rem);font-weight:500;letter-spacing:.06em;color:#c4b8e8;margin:1rem 0 2.5rem;">
          Crafting Magical Game Experiences
        </p>

        <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
          <RouterLink to="/games" class="btn-primary" style="font-size:1rem;padding:.85rem 2.5rem;">
            ✦ Explore Games
          </RouterLink>
          <RouterLink to="/about" class="btn-outline" style="padding:.85rem 2rem;">
            About the Studio
          </RouterLink>
        </div>

        <!-- Stats -->
        <div style="display:flex;gap:2.5rem;justify-content:center;flex-wrap:wrap;margin-top:3.5rem;padding-top:2rem;border-top:1px solid rgba(176,74,255,.15);">
          <div v-for="stat in stats" :key="stat.label" style="text-align:center;">
            <div class="font-cinzel" :style="`font-size:2rem;font-weight:700;background:${stat.grad};-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;`">
              {{ stat.value }}
            </div>
            <div style="color:#8a80aa;font-size:.8rem;font-family:'Rajdhani',sans-serif;font-weight:600;letter-spacing:.1em;text-transform:uppercase;margin-top:.2rem;">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ FEATURED GAMES ══ -->
    <section style="padding:6rem 1.5rem;max-width:1280px;margin:0 auto;">
      <div style="text-align:center;margin-bottom:3.5rem;">
        <p class="font-rajdhani" style="color:#b04aff;font-size:.85rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;margin-bottom:.75rem;">✦ Our Creations</p>
        <h2 class="font-cinzel glow-purple" style="font-size:clamp(1.6rem,4vw,2.5rem);font-weight:700;">Featured Games</h2>
        <div style="width:60px;height:3px;background:linear-gradient(90deg,#b04aff,#00d4ff);border-radius:2px;box-shadow:0 0 12px #b04aff;margin:1rem auto;" />
        <p style="color:#8a80aa;max-width:500px;margin:1rem auto 0;line-height:1.7;font-size:.95rem;">
          From relaxing puzzles to epic adventures — each game is crafted with passion and magic.
        </p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:1.5rem;">
        <template v-if="isLoading">
          <SkeletonCard v-for="n in 3" :key="'skeleton-' + n" />
        </template>
        <template v-else>
          <GameCard
            v-for="game in featuredGames"
            :key="game.id"
            :game="game"
            @view="$router.push('/game/' + $event)"
          />
        </template>
      </div>
      <div style="text-align:center;margin-top:2.5rem;">
        <RouterLink to="/games" class="btn-outline">View All Games →</RouterLink>
      </div>
    </section>

    <!-- ══ ABOUT STRIP ══ -->
    <section style="padding:5rem 1.5rem;background:linear-gradient(135deg,rgba(176,74,255,.06) 0%,rgba(0,212,255,.04) 100%);border-top:1px solid rgba(176,74,255,.1);border-bottom:1px solid rgba(176,74,255,.1);">
      <div style="max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center;" class="about-grid">
        <div>
          <p class="font-rajdhani" style="color:#00d4ff;font-size:.85rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;margin-bottom:.75rem;">✦ Who We Are</p>
          <h2 class="font-cinzel" style="font-size:clamp(1.4rem,3vw,2rem);margin-bottom:1.25rem;">
            A Studio Born From<br><span style="color:#b04aff;">Cambodian Spirit</span>
          </h2>
          <div style="width:60px;height:3px;background:linear-gradient(90deg,#b04aff,#00d4ff);border-radius:2px;margin-bottom:1.5rem;" />
          <p style="color:#a098c0;line-height:1.8;margin-bottom:1.5rem;">
            Gumiho Studio is an indie game studio blending Southeast Asian mythology with modern gameplay. We build experiences that resonate with local culture while captivating players worldwide.
          </p>
          <RouterLink to="/about" class="btn-primary">Meet the Team →</RouterLink>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
          <div
            v-for="tech in techs"
            :key="tech.name"
            class="border-glow"
            style="background:rgba(13,13,31,.6);border-radius:14px;padding:1.25rem;text-align:center;"
          >
            <div style="font-size:2rem;margin-bottom:.5rem;">{{ tech.icon }}</div>
            <div class="font-rajdhani" style="font-size:1rem;font-weight:700;color:#f0eaff;letter-spacing:.05em;">{{ tech.name }}</div>
            <div style="color:#8a80aa;font-size:.78rem;">{{ tech.desc }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { games } from '../data/games.js'
import FoxLogo       from '../components/FoxLogo.vue'
import GameCard       from '../components/GameCard.vue'
import SkeletonCard   from '../components/SkeletonCard.vue'
import Background3D from '../components/Background3D.vue'

const isLoading = ref(true)

onMounted(() => {
  // Simulate loading delay for the premium skeleton effect
  setTimeout(() => {
    isLoading.value = false
  }, 1800)
})

const featuredGames = computed(() => games.slice(0, 3))

const stats = [
  { value: '6+',   label: 'Games Released', grad: 'linear-gradient(135deg,#b04aff,#00d4ff)' },
  { value: '50K+', label: 'Players',         grad: 'linear-gradient(135deg,#ff4af0,#b04aff)' },
  { value: '4.7★', label: 'Avg Rating',      grad: 'linear-gradient(135deg,#00d4ff,#ff4af0)' }
]

const techs = [
  { icon: '🎮', name: 'Unity',   desc: 'Game Engine'  },
  { icon: '📱', name: 'Flutter', desc: 'Mobile Apps'  },
  { icon: '⚙️', name: 'Laravel', desc: 'Backend'      },
  { icon: '🌐', name: 'Vue.js',  desc: 'Web Apps'     }
]
</script>

<style scoped>
@media (max-width: 768px) {
  .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
}
</style>
