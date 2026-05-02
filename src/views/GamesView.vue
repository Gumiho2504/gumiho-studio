<template>
  <div style="padding-top:90px;min-height:100vh;">

    <!-- Header -->
    <div style="padding:3rem 1.5rem 2rem;max-width:1280px;margin:0 auto;">
      <p class="font-rajdhani" style="color:#b04aff;font-size:.85rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;margin-bottom:.5rem;">✦ Our Portfolio</p>
      <h1 class="font-cinzel glow-purple" style="font-size:clamp(1.6rem,4vw,2.5rem);font-weight:700;margin-bottom:.5rem;">All Games</h1>
      <div style="width:60px;height:3px;background:linear-gradient(90deg,#b04aff,#00d4ff);border-radius:2px;box-shadow:0 0 12px #b04aff;margin-bottom:1.5rem;" />
      <p style="color:#8a80aa;max-width:500px;line-height:1.7;font-size:.95rem;">
        Every title we've crafted — browse, filter, and dive in.
      </p>
    </div>

    <!-- Controls -->
    <div style="padding:0 1.5rem 2rem;max-width:1280px;margin:0 auto;">
      <div style="display:flex;flex-wrap:wrap;gap:1rem;align-items:center;margin-bottom:1.25rem;">
        <!-- Search -->
        <div style="position:relative;flex:1;min-width:220px;max-width:360px;">
          <svg style="position:absolute;left:.9rem;top:50%;transform:translateY(-50%);color:#8a80aa;pointer-events:none;" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
          </svg>
          <input v-model="search" class="search-input" placeholder="Search games…" />
        </div>
        <!-- Filter buttons -->
        <div style="display:flex;flex-wrap:wrap;gap:.5rem;">
          <button
            v-for="cat in categories"
            :key="cat"
            class="filter-btn"
            :class="{ active: activeFilter === cat }"
            @click="activeFilter = cat"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <!-- Count -->
      <p class="font-rajdhani" style="color:#8a80aa;font-size:.85rem;font-weight:600;letter-spacing:.05em;margin-bottom:1.5rem;">
        Showing <span style="color:#b04aff;">{{ filtered.length }}</span> of {{ games.length }} games
      </p>

      <!-- Grid -->
      <Transition name="fade" mode="out-in">
        <div
          v-if="filtered.length"
          key="grid"
          style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:1.5rem;"
        >
          <GameCard
            v-for="game in filtered"
            :key="game.id"
            :game="game"
            @view="$router.push('/game/' + $event)"
          />
        </div>
        <div v-else key="empty" style="text-align:center;padding:5rem 1rem;">
          <div style="font-size:3rem;margin-bottom:1rem;">🔮</div>
          <p style="color:#8a80aa;font-size:1rem;">No games found. Try a different search or filter.</p>
          <button class="btn-outline" style="margin-top:1.5rem;" @click="search='';activeFilter='All'">
            Clear Filters
          </button>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { games } from '../data/games.js'
import GameCard from '../components/GameCard.vue'

const search       = ref('')
const activeFilter = ref('All')
const categories   = ['All', 'Puzzle', 'Card', 'Multiplayer', 'RPG', 'Action']

const filtered = computed(() => {
  return games.filter(g => {
    const matchCat = activeFilter.value === 'All' || g.category === activeFilter.value
    const q = search.value.toLowerCase()
    const matchSearch = !q
      || g.name.toLowerCase().includes(q)
      || g.description.toLowerCase().includes(q)
      || g.category.toLowerCase().includes(q)
    return matchCat && matchSearch
  })
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .25s ease; }
.fade-enter-from,  .fade-leave-to      { opacity: 0; }
</style>
