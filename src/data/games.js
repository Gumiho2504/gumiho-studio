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
      data: `${BASE}/unity/Bloomee/Build/bloomee_web.data.unityweb`,
      framework: `${BASE}/unity/Bloomee/Build/bloomee_web.framework.js.unityweb`,
      code: `${BASE}/unity/Bloomee/Build/bloomee_web.wasm.unityweb`,
      streamingAssets: `${BASE}/unity/Bloomee/StreamingAssets`,
    }
  },
  {
    id: 2,
    name: "Tiles Blast",
    tagline: "Blast through cosmic tiles",
    description: "A fast-paced tile-matching puzzle game with explosive combos and cosmic effects. Match and blast through hundreds of levels in this vibrant puzzle adventure.",
    thumb: `${BASE}/tiles_blast_thumb_1777879066376.png`,
    banner: `${BASE}/tiles_blast_banner_1777879096705.png`,
    category: "Puzzle",
    features: [
      "Hundreds of challenging levels",
      "Spectacular explosive combos",
      "Vibrant cosmic art style",
      "Easy to learn, hard to master",
      "Regular new level updates",
      "Daily rewards and events"
    ],
    screenshots: [
      `${BASE}/tiles_blast_thumb_1777879066376.png`,
    ],
    links: { playstore: "#", appstore: "#" },
    year: 2024,
    engine: "Unity6",
    webgl: {
      loader: `${BASE}/unity/TilesBlast/Build/TileBlastWebGL.loader.js`,
      data: `${BASE}/unity/TilesBlast/Build/TileBlastWebGL.data.unityweb`,
      framework: `${BASE}/unity/TilesBlast/Build/TileBlastWebGL.framework.js.unityweb`,
      code: `${BASE}/unity/TilesBlast/Build/TileBlastWebGL.wasm.unityweb`,
    }
  },
  {
    id: 3,
    name: "Swiper Bird",
    tagline: "Swipe to soar through the magic forest",
    description: "A fast-paced, addictive mobile adventure where you guide a brave little bird through a mystical forest. Use intuitive swipe gestures to dodge obstacles, collect magical fruits, and set high scores in this beautiful Cocos Creator powered experience.",
    thumb: `${BASE}/swiper_bird_thumb_1777880735824.png`,
    banner: `${BASE}/swiper_bird_banner_1777880769400.png`,
    category: "Action",
    features: [
      "Smooth swipe-based controls",
      "Endless procedurally generated levels",
      "Unlockable bird characters",
      "Stunning magical forest environment",
      "Compete with friends on leaderboards",
      "Optimized for mobile web"
    ],
    screenshots: [
      `${BASE}/swiper_bird_thumb_1777880735824.png`,
    ],
    links: { playstore: "#", appstore: "#" },
    year: 2024,
    engine: "Cocos",
    cocosUrl: `${BASE}/cocos/SwiperBird/index.html`,
    aspectRatio: "9 / 16"
  },
  // {
  //   id: 4,
  //   name: "Spirit Cards",

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
