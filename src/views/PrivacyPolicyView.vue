<template>
  <div style="padding-top: 90px; min-height: 100vh;">
    <!-- Not found -->
    <div v-if="!game" style="text-align:center;padding:8rem 1rem;">
      <div style="font-size:4rem;margin-bottom:1rem;">👻</div>
      <h2 class="font-cinzel" style="color:#f0eaff;margin-bottom:1rem;">Game Not Found</h2>
      <RouterLink to="/games" class="btn-primary">← Back to Games</RouterLink>
    </div>

    <!-- Policy Content -->
    <div v-else style="max-width: 800px; margin: 0 auto; padding: 3rem 1.5rem 5rem;">
      <RouterLink :to="'/game/' + game.id" class="btn-outline" style="margin-bottom:2rem;display:inline-flex;">
        ← Back to {{ game.name }}
      </RouterLink>

      <h2 class="font-rajdhani" style="color:#b04aff;letter-spacing:0.15em;margin-bottom:0.25rem;text-transform:uppercase;font-size:1.2rem;">
        Privacy Policy for
      </h2>
      <h1 class="font-cinzel glow-purple" style="font-size:clamp(2.5rem,6vw,4.5rem);font-weight:900;margin-bottom:2.5rem;line-height:1.1;">
        {{ game.name }}
      </h1>
      
      <div class="border-glow" style="background:#0d0d1f;border-radius:16px;padding:2.5rem;">
        <p style="color:#8a80aa;font-size:0.9rem;margin-bottom:2rem;font-style:italic;">
          Last updated: January 1, 2024
        </p>

        <p style="color:#a098c0;line-height:1.8;font-size:1rem;margin-bottom:1.5rem;">
          Thank you for playing <strong style="color:#f0eaff;">{{ game.name }}</strong>! We are committed to protecting your privacy and ensuring you have a safe and enjoyable gaming experience.
        </p>

        <h3 class="font-rajdhani" style="color:#b04aff;font-size:1.3rem;font-weight:700;margin-bottom:1rem;margin-top:2.5rem;text-transform:uppercase;letter-spacing:0.05em;">1. Information We Collect</h3>
        <p style="color:#a098c0;line-height:1.8;font-size:1rem;margin-bottom:1.5rem;">
          <strong style="color:#f0eaff;">{{ game.name }}</strong> is designed to be played securely. We do not require you to provide any personal information to download or play our game. We may collect anonymous gameplay data (such as high scores, levels completed, or crash reports) solely to improve the game's performance and fix bugs.
        </p>

        <h3 class="font-rajdhani" style="color:#b04aff;font-size:1.3rem;font-weight:700;margin-bottom:1rem;margin-top:2.5rem;text-transform:uppercase;letter-spacing:0.05em;">2. Use of Information</h3>
        <p style="color:#a098c0;line-height:1.8;font-size:1rem;margin-bottom:1.5rem;">
          Any anonymous data collected is used strictly for internal analytics, game balancing, and troubleshooting. We do not sell, rent, or share any data with third-party advertisers or data brokers.
        </p>

        <h3 class="font-rajdhani" style="color:#b04aff;font-size:1.3rem;font-weight:700;margin-bottom:1rem;margin-top:2.5rem;text-transform:uppercase;letter-spacing:0.05em;">3. Children's Privacy</h3>
        <p style="color:#a098c0;line-height:1.8;font-size:1rem;margin-bottom:1.5rem;">
          <strong style="color:#f0eaff;">{{ game.name }}</strong> does not knowingly collect or solicit personal information from anyone under the age of 13. If you believe we might have any information from or about a child under 13, please contact us so we can promptly delete it.
        </p>

        <h3 class="font-rajdhani" style="color:#b04aff;font-size:1.3rem;font-weight:700;margin-bottom:1rem;margin-top:2.5rem;text-transform:uppercase;letter-spacing:0.05em;">4. Changes to This Policy</h3>
        <p style="color:#a098c0;line-height:1.8;font-size:1rem;margin-bottom:1.5rem;">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
        </p>

        <h3 class="font-rajdhani" style="color:#b04aff;font-size:1.3rem;font-weight:700;margin-bottom:1rem;margin-top:2.5rem;text-transform:uppercase;letter-spacing:0.05em;">5. Contact Us</h3>
        <p style="color:#a098c0;line-height:1.8;font-size:1rem;margin-bottom:1.5rem;">
          If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <a href="mailto:support@gumihostudio.com" style="color:#00d4ff;text-decoration:none;">support@gumihostudio.com</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { games } from '../data/games.js'

const route = useRoute()
const game = computed(() => games.find(g => g.id === parseInt(route.params.id)) || null)
</script>
