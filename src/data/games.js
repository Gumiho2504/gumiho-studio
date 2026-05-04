const BASE = import.meta.env.BASE_URL.endsWith('/') 
  ? import.meta.env.BASE_URL.slice(0, -1) 
  : import.meta.env.BASE_URL;

export const games = [
  {
    id: 1,
    name: "Bloomee Match 3",
    tagline: "Let flowers bloom in your heart",
    description:
      "A relaxing Match-3 puzzle game where you arrange colorful blooms to restore enchanted gardens. Features over 200 handcrafted levels with unique mechanics — from explosive petals to cascading vines. Perfect for puzzle lovers seeking a meditative escape.",
    thumb:
      "https://play-lh.googleusercontent.com/HXXeqIythDMJ7VXYJFCKKgu5lu8KGWxOaRo8j95-yLDvwY9VoPx9jB_P9elu3A9OIbGmxaWM_wfGn51XgJd6GQ=w5120-h2880-rw",
    banner:
      "https://play-lh.googleusercontent.com/HXXeqIythDMJ7VXYJFCKKgu5lu8KGWxOaRo8j95-yLDvwY9VoPx9jB_P9elu3A9OIbGmxaWM_wfGn51XgJd6GQ=w5120-h2880-rw",
    category: "Puzzle",
    features: [
      "200+ unique handcrafted levels",
      "Special power-up flowers & combos",
      "Beautiful hand-painted art style",
      "Offline play support",
      "Relaxing original soundtrack",
      "Daily garden challenges",
    ],
    screenshots: [
      "https://play-lh.googleusercontent.com/FJlVrLKoRDf5_aLMUxRGPB4RXWF1tX-yq-JZWH3D8A-IsrJqE-m_x_rAgUSCNNYQuBmFlAadzYIkoLbs2lK0-To=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/w81_EM7_7p22p-OqBd45SgHE1MvjjGrTajHCYJM-LRva6az9LrkDMTo1ps3y8ipSp5QaE2d985AdxEuQ6yK85p8=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/NpNwgVHxOPiKns0TbJYqAxdnL64-ZsRKiFFhjbm6icWMYNauH4yWKhk_XeFqmd0lvd1Vshv5dH2_EDm8ee8K=w1052-h592-rw",
    ],
    links: {
      playstore:
        "https://play.google.com/store/apps/details?id=com.gumiho.bloomee",
      appstore: "#",
    },
    year: 2024,
    engine: "Unity6",
    webgl: {
      loader: `${BASE}/unity/Bloomee/Build/bloomee_web.loader.js`,
      data: `${BASE}/unity/Bloomee/Build/bloomee_web.data.br`,
      framework: `${BASE}/unity/Bloomee/Build/bloomee_web.framework.js.br`,
      code: `${BASE}/unity/Bloomee/Build/bloomee_web.wasm.br`,
      streamingAssets: `${BASE}/unity/Bloomee/StreamingAssets`,
    }
  },
  // {
  //   id: 2,
  //   name: "Spirit Cards",
  //   tagline: "Battle with ancient mystical power",
  //   description: "A strategic card battle game inspired by Southeast Asian mythology. Build decks from over 300 spirit cards, each with unique abilities drawn from Khmer legends. Challenge players worldwide in ranked seasons.",
  //   thumb: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=600&q=80",
  //   banner: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=1200&q=80",
  //   category: "Card",
  //   features: [
  //     "300+ unique spirit cards",
  //     "Inspired by Khmer mythology",
  //     "PvP ranked ladder system",
  //     "Weekly new card releases",
  //     "Clan system & team battles",
  //     "Offline AI practice mode"
  //   ],
  //   screenshots: [
  //     "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=600&q=80",
  //     "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=600&q=80",
  //     "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=600&q=80"
  //   ],
  //   links: { playstore: "#", appstore: "#" },
  //   year: 2024,
  //   engine: "Unity"
  // },
  // {
  //   id: 3,
  //   name: "Neon Realm",
  //   tagline: "Survive together in the digital frontier",
  //   description: "A fast-paced multiplayer battle arena set in a cyberpunk digital world. Up to 8 players fight across procedurally-generated arenas using unique hacker abilities. Real-time matches, cross-platform play.",
  //   thumb: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80",
  //   banner: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=1200&q=80",
  //   category: "Multiplayer",
  //   features: [
  //     "8-player real-time battles",
  //     "Cross-platform multiplayer",
  //     "20+ unique hacker characters",
  //     "Procedurally generated arenas",
  //     "Seasonal ranked tournaments",
  //     "Voice chat & party system"
  //   ],
  //   screenshots: [
  //     "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80",
  //     "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80",
  //     "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=600&q=80"
  //   ],
  //   links: { playstore: "#", appstore: "#" },
  //   year: 2025,
  //   engine: "Unity"
  // },
  // {
  //   id: 4,
  //   name: "Fox Tails",
  //   tagline: "An epic nine-tails adventure",
  //   description: "An atmospheric action-RPG following a Gumiho's journey across ancient spirit realms. Master nine elemental abilities, forge alliances, and uncover the secrets of the spirit world in this hand-crafted adventure.",
  //   thumb: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80",
  //   banner: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=1200&q=80",
  //   category: "RPG",
  //   features: [
  //     "9 elemental fox abilities",
  //     "Hand-crafted open world",
  //     "Spirit world exploration",
  //     "Dynamic day/night cycle",
  //     "Original orchestral score",
  //     "Multiple story endings"
  //   ],
  //   screenshots: [
  //     "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80",
  //     "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=600&q=80",
  //     "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&q=80"
  //   ],
  //   links: { playstore: "#", appstore: "#" },
  //   year: 2025,
  //   engine: "Unity"
  // },
  // {
  //   id: 5,
  //   name: "Temple Rush",
  //   tagline: "Race through ancient Khmer temples",
  //   description: "An endless runner set in the magnificent temples of ancient Cambodia. Dodge traps, leap over ruins, and collect relics across 30 stunning temple environments inspired by Angkor Wat and beyond.",
  //   thumb: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=600&q=80",
  //   banner: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80",
  //   category: "Action",
  //   features: [
  //     "30 unique temple environments",
  //     "Angkor Wat inspired art",
  //     "Power-up relic system",
  //     "Daily challenge runs",
  //     "Online leaderboards",
  //     "Unlockable characters"
  //   ],
  //   screenshots: [
  //     "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=600&q=80",
  //     "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80",
  //     "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&q=80"
  //   ],
  //   links: { playstore: "#", appstore: "#" },
  //   year: 2023,
  //   engine: "Unity"
  // },
  // {
  //   id: 6,
  //   name: "Starfall Puzzle",
  //   tagline: "Align the stars, reshape the cosmos",
  //   description: "A zen puzzle game where you rearrange constellation fragments to restore fallen stars. Each chapter unfolds a cosmic mythology, with 120 meditative puzzles and a breathtaking procedural star-field backdrop.",
  //   thumb: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&q=80",
  //   banner: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1200&q=80",
  //   category: "Puzzle",
  //   features: [
  //     "120 cosmic puzzle levels",
  //     "Procedural starfield visuals",
  //     "Constellation mythology lore",
  //     "Binaural audio experience",
  //     "Colorblind accessibility mode",
  //     "Hint system & undo"
  //   ],
  //   screenshots: [
  //     "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&q=80",
  //     "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&q=80",
  //     "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=600&q=80"
  //   ],
  //   links: { playstore: "#", appstore: "#" },
  //   year: 2023,
  //   engine: "Unity"
  // }
];
