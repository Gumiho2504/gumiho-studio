<template>
  <footer class="footer" style="padding:3rem 1.5rem 2rem;">
    <div style="max-width:1280px;margin:0 auto;">
      <div
        style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:2.5rem;margin-bottom:2.5rem;">

        <!-- Brand -->
        <div>
          <RouterLink to="/" style="display:flex;align-items:center;gap:.6rem;margin-bottom:1rem;text-decoration:none;">
            <FoxLogo :size="30" />
            <span class="font-cinzel"
              style="font-size:.9rem;background:linear-gradient(135deg,#b04aff,#00d4ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">
              Gumiho Studio
            </span>
          </RouterLink>
          <p style="color:#8a80aa;font-size:.85rem;line-height:1.7;max-width:200px;">
            Crafting magical game experiences for Cambodia and beyond.
          </p>
        </div>

        <!-- Navigate -->
        <div>
          <p class="font-rajdhani"
            style="color:#f0eaff;font-size:.8rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;margin-bottom:1rem;">
            Navigate
          </p>
          <div style="display:flex;flex-direction:column;gap:.6rem;">
            <RouterLink v-for="link in navLinks" :key="link.to" :to="link.to"
              style="color:#8a80aa;font-size:.88rem;text-decoration:none;transition:color .2s;"
              @mouseover="e => e.target.style.color = '#b04aff'" @mouseout="e => e.target.style.color = '#8a80aa'">
              {{ link.label }}
            </RouterLink>
          </div>
        </div>

        <!-- Connect -->
        <div>
          <p class="font-rajdhani"
            style="color:#f0eaff;font-size:.8rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;margin-bottom:1rem;">
            Connect
          </p>
          <div style="display:flex;gap:.8rem;flex-wrap:wrap;">
            <a v-for="s in socials" :key="s.label" :href="s.link" class="social-link" :title="s.label"
              :style="`width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;border:1px solid rgba(176,74,255,.25);background:rgba(176,74,255,.08);`">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" v-html="s.path" />
            </a>
          </div>
        </div>

      </div>

      <div
        style="border-top:1px solid rgba(176,74,255,.1);padding-top:1.5rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;">
        <p style="color:#8a80aa;font-size:.82rem;">© 2024 Gumiho Studio. All rights reserved.</p>
        <p style="color:#8a80aa;font-size:.82rem;">Made with <span style="color:#ff4af0;">♥</span> in Cambodia 🇰🇭</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import FoxLogo from './FoxLogo.vue'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/games', label: 'Games' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' }
]

const socials = [
  {
    label: 'GitHub',
    link: 'https://github.com/Gumiho2504',
    path: `<path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>`
  },
  {
    label: 'YouTube',
    link: 'https://www.youtube.com/@vibe-game-coder',
    path: `<path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>`
  },
  {
    label: 'Telegram',
    link: 'https://t.me/hemchanmetrey',
    path: `<path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.012 9.483c-.148.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.875.738z"/>`
  }
]
</script>
