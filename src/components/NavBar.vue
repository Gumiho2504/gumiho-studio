<template>
  <nav class="navbar">
    <div style="max-width:1280px;margin:0 auto;padding:0 1.5rem;display:flex;align-items:center;justify-content:space-between;height:68px;">
      <!-- Logo -->
      <RouterLink to="/" style="display:flex;align-items:center;gap:.75rem;text-decoration:none;">
        <FoxLogo :size="38" />
        <span
          class="font-cinzel"
          style="font-size:1.05rem;font-weight:700;background:linear-gradient(135deg,#b04aff,#00d4ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;letter-spacing:.05em;line-height:1.2;"
        >
          Gumiho<br>
          <span style="font-size:.6rem;letter-spacing:.25em;">STUDIO</span>
        </span>
      </RouterLink>

      <!-- Desktop links -->
      <div style="display:flex;gap:2.2rem;align-items:center;" class="desktop-links">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="nav-link"
          :class="{ active: isActive(link.to) }"
        >
          {{ link.label }}
        </RouterLink>
        <RouterLink to="/contact" class="btn-primary" style="padding:.5rem 1.3rem;font-size:.85rem;">
          ✦ Hire Us
        </RouterLink>
      </div>

      <!-- Mobile hamburger -->
      <button
        class="mobile-ham"
        @click="mobileOpen = !mobileOpen"
        style="background:none;border:none;color:#f0eaff;cursor:pointer;padding:.3rem;"
        aria-label="Toggle menu"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
          <template v-if="!mobileOpen">
            <line x1="3" y1="6"  x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </template>
          <template v-else>
            <line x1="4" y1="4" x2="20" y2="20"/>
            <line x1="20" y1="4" x2="4" y2="20"/>
          </template>
        </svg>
      </button>
    </div>

    <!-- Mobile dropdown -->
    <Transition name="slide-down">
      <div v-if="mobileOpen" style="background:rgba(6,6,18,.97);backdrop-filter:blur(20px);border-bottom:1px solid rgba(176,74,255,.2);padding:1rem 1.5rem 1.5rem;">
        <div
          v-for="link in navLinks"
          :key="link.to"
          style="padding:.75rem 0;border-bottom:1px solid rgba(176,74,255,.1);"
        >
          <RouterLink
            :to="link.to"
            class="nav-link"
            :class="{ active: isActive(link.to) }"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </RouterLink>
        </div>
        <div style="margin-top:1rem;">
          <RouterLink to="/contact" class="btn-primary" style="width:100%;justify-content:center;" @click="mobileOpen=false">
            ✦ Hire Us
          </RouterLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import FoxLogo from './FoxLogo.vue'

const route = useRoute()
const mobileOpen = ref(false)

const navLinks = [
  { to: '/',        label: 'Home'    },
  { to: '/games',   label: 'Games'   },
  { to: '/about',   label: 'About'   },
  { to: '/contact', label: 'Contact' }
]

function isActive(to) {
  if (to === '/') return route.path === '/'
  return route.path.startsWith(to)
}
</script>

<style scoped>
.desktop-links { display: flex; }
.mobile-ham    { display: none; }

@media (max-width: 768px) {
  .desktop-links { display: none; }
  .mobile-ham    { display: block; }
}

.slide-down-enter-active, .slide-down-leave-active { transition: all .25s ease; }
.slide-down-enter-from, .slide-down-leave-to       { opacity: 0; transform: translateY(-10px); }
</style>
