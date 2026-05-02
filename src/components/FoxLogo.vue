<template>
  <svg :width="size" :height="size" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="foxGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%"   stop-color="#ff4af0"/>
        <stop offset="50%"  stop-color="#b04aff"/>
        <stop offset="100%" stop-color="#00d4ff"/>
      </radialGradient>
      <filter id="foxGlow">
        <feGaussianBlur stdDeviation="2" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <g filter="url(#foxGlow)">
      <!-- 9 tails -->
      <path d="M50 65 Q25 85 10 70"  stroke="url(#foxGrad)" stroke-width="3"   fill="none" stroke-linecap="round" opacity="0.7"/>
      <path d="M50 65 Q20 90 15 78"  stroke="url(#foxGrad)" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.6"/>
      <path d="M50 65 Q15 80 5  65"  stroke="url(#foxGrad)" stroke-width="2"   fill="none" stroke-linecap="round" opacity="0.5"/>
      <path d="M50 65 Q75 85 90 70"  stroke="url(#foxGrad)" stroke-width="3"   fill="none" stroke-linecap="round" opacity="0.7"/>
      <path d="M50 65 Q80 90 85 78"  stroke="url(#foxGrad)" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.6"/>
      <path d="M50 65 Q85 80 95 65"  stroke="url(#foxGrad)" stroke-width="2"   fill="none" stroke-linecap="round" opacity="0.5"/>
      <path d="M50 65 Q50 95 50 82"  stroke="url(#foxGrad)" stroke-width="3"   fill="none" stroke-linecap="round" opacity="0.7"/>
      <path d="M50 65 Q35 92 30 80"  stroke="url(#foxGrad)" stroke-width="2"   fill="none" stroke-linecap="round" opacity="0.5"/>
      <path d="M50 65 Q65 92 70 80"  stroke="url(#foxGrad)" stroke-width="2"   fill="none" stroke-linecap="round" opacity="0.5"/>
      <!-- Body -->
      <ellipse cx="50" cy="58" rx="18" ry="14" fill="url(#foxGrad)" opacity="0.9"/>
      <!-- Head -->
      <ellipse cx="50" cy="38" rx="16" ry="14" fill="url(#foxGrad)"/>
      <!-- Ears -->
      <polygon points="36,28 30,12 44,22" fill="url(#foxGrad)"/>
      <polygon points="64,28 70,12 56,22" fill="url(#foxGrad)"/>
      <!-- Inner ear -->
      <polygon points="37,26 33,15 43,23" fill="#ff4af0" opacity="0.5"/>
      <polygon points="63,26 67,15 57,23" fill="#ff4af0" opacity="0.5"/>
      <!-- Eyes -->
      <ellipse cx="43" cy="37" rx="4"   ry="4.5" fill="#0a0a1a"/>
      <ellipse cx="57" cy="37" rx="4"   ry="4.5" fill="#0a0a1a"/>
      <ellipse cx="44" cy="36" rx="1.5" ry="2"   fill="#00d4ff" opacity="0.9"/>
      <ellipse cx="58" cy="36" rx="1.5" ry="2"   fill="#00d4ff" opacity="0.9"/>
      <!-- Nose -->
      <ellipse cx="50" cy="44" rx="2.5" ry="1.5" fill="#ff4af0"/>
      <!-- Shine -->
      <ellipse cx="50" cy="34" rx="6"   ry="3"   fill="white"   opacity="0.12"/>
    </g>
  </svg>
</template>

<script setup>
defineProps({ size: { type: Number, default: 40 } })
</script>
