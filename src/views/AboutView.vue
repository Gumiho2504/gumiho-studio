<template>
  <div style="padding-top:90px;min-height:100vh;">
    <div style="max-width:1100px;margin:0 auto;padding:3rem 1.5rem 6rem;">

      <!-- Header -->
      <div style="text-align:center;margin-bottom:4rem;">
        <p class="font-rajdhani" style="color:#b04aff;font-size:.85rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;margin-bottom:.5rem;">✦ Our Story</p>
        <h1 class="font-cinzel glow-purple" style="font-size:clamp(1.6rem,4vw,2.5rem);font-weight:700;margin-bottom:.75rem;">About Gumiho Studio</h1>
        <div style="width:60px;height:3px;background:linear-gradient(90deg,#b04aff,#00d4ff);border-radius:2px;box-shadow:0 0 12px #b04aff;margin:0 auto 1.5rem;" />
      </div>

      <!-- Story section -->
      <div class="story-grid" style="margin-bottom:5rem;">
        <div>
          <h2 class="font-cinzel" style="font-size:1.6rem;color:#f0eaff;margin-bottom:1.25rem;">
            The Spirit Behind<br>the Studio
          </h2>
          <p style="color:#a098c0;line-height:1.9;margin-bottom:1.2rem;">
            Gumiho Studio was born from a love of games, mythology, and Cambodian culture. Named after the mystical nine-tailed fox spirit of East Asian folklore, we channel that legendary power into every pixel and mechanic we create.
          </p>
          <p style="color:#a098c0;line-height:1.9;margin-bottom:1.2rem;">
            We are an indie studio building games that celebrate Southeast Asian heritage while delivering world-class gaming experiences. Our titles are crafted with care — blending cultural storytelling with modern gameplay loops.
          </p>
          <p style="color:#a098c0;line-height:1.9;">
            Whether you're a casual player solving puzzles or a competitive gamer climbing ranked ladders, we have a world for you to explore.
          </p>
        </div>
        <div style="text-align:center;">
          <div style="background:rgba(176,74,255,.06);border:1px solid rgba(176,74,255,.2);border-radius:24px;padding:3rem;display:inline-block;">
            <FoxLogo :size="120" />
            <div class="font-cinzel" style="font-size:1.2rem;font-weight:700;margin-top:1.5rem;background:linear-gradient(135deg,#b04aff,#00d4ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">
              Gumiho Studio
            </div>
            <div style="color:#8a80aa;font-size:.78rem;font-family:'Rajdhani',sans-serif;font-weight:600;letter-spacing:.15em;text-transform:uppercase;margin-top:.25rem;">
              Est. 2022 · Phnom Penh, Cambodia
            </div>
          </div>
        </div>
      </div>

      <!-- Vision -->
      <div style="background:linear-gradient(135deg,rgba(176,74,255,.08),rgba(0,212,255,.05));border:1px solid rgba(176,74,255,.2);border-radius:20px;padding:2.5rem;margin-bottom:4rem;">
        <h2 class="font-cinzel" style="font-size:1.4rem;color:#f0eaff;margin-bottom:1rem;">🌙 Our Vision</h2>
        <p style="color:#a098c0;line-height:1.9;font-size:.98rem;max-width:700px;">
          We envision a world where Cambodian game studios stand proudly alongside global giants. Our mission is to build games that bridge local culture with global appeal — creating titles Cambodians are proud of, and the world can't stop playing.
        </p>
        <div style="display:flex;flex-wrap:wrap;gap:1rem;margin-top:1.75rem;">
          <span
            v-for="tag in visionTags"
            :key="tag"
            class="badge"
            style="font-size:.82rem;font-family:'Nunito',sans-serif;font-weight:700;letter-spacing:.03em;padding:.4rem .9rem;color:#c4b8e8;border-color:rgba(176,74,255,.3);background:rgba(176,74,255,.08);"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <!-- Skills -->
      <div>
        <h2 class="font-cinzel" style="font-size:1.4rem;color:#f0eaff;margin-bottom:.75rem;">Technical Skills</h2>
        <div style="width:60px;height:3px;background:linear-gradient(90deg,#b04aff,#00d4ff);border-radius:2px;margin-bottom:2.5rem;" />
        <div class="skills-grid">
          <div v-for="skill in skills" :key="skill.name">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.6rem;">
              <span style="font-family:'Rajdhani',sans-serif;font-size:.95rem;font-weight:700;color:#f0eaff;display:flex;align-items:center;gap:.5rem;">
                {{ skill.icon }} {{ skill.name }}
              </span>
              <span style="font-family:'Rajdhani',sans-serif;font-size:.85rem;font-weight:700;color:#b04aff;">{{ skill.pct }}%</span>
            </div>
            <div class="skill-bar-bg">
              <div
                class="skill-bar-fill"
                :style="{ width: barsVisible ? skill.pct + '%' : '0%', background: skill.grad }"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import FoxLogo from '../components/FoxLogo.vue'

const barsVisible = ref(false)
onMounted(() => setTimeout(() => { barsVisible.value = true }, 300))

const visionTags = [
  '🇰🇭 Cambodian Heritage',
  '🌏 Global Audience',
  '🎮 Quality First',
  '✨ Magical Experiences',
  '🤝 Community Driven'
]

const skills = [
  { name: 'Unity',    icon: '🎮', pct: 92, grad: 'linear-gradient(90deg,#b04aff,#7c20e0)' },
  { name: 'Flutter',  icon: '📱', pct: 85, grad: 'linear-gradient(90deg,#00d4ff,#0088bb)' },
  { name: 'Laravel',  icon: '⚙️', pct: 80, grad: 'linear-gradient(90deg,#ff4af0,#b04aff)' },
  { name: 'Vue.js',   icon: '🌐', pct: 78, grad: 'linear-gradient(90deg,#42d392,#00d4ff)' },
  { name: 'C# / C++', icon: '💻', pct: 88, grad: 'linear-gradient(90deg,#ffd700,#ff6b35)' },
  { name: 'Blender',  icon: '🎨', pct: 65, grad: 'linear-gradient(90deg,#ff6b35,#ff4af0)' }
]
</script>

<style scoped>
.story-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.5rem;
  align-items: center;
}
.skills-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3rem;
  row-gap: 2rem;
}
@media (max-width: 768px) {
  .story-grid  { grid-template-columns: 1fr; gap: 2rem; }
  .skills-grid { grid-template-columns: 1fr; }
}
</style>
