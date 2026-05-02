<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="src" class="modal-overlay" @click.self="$emit('close')">
        <div style="position:relative;">
          <img
            :src="src"
            alt="Screenshot"
            style="max-width:90vw;max-height:85vh;border-radius:12px;object-fit:contain;display:block;"
          />
          <button
            @click="$emit('close')"
            style="position:absolute;top:-44px;right:0;background:rgba(176,74,255,.2);border:1px solid rgba(176,74,255,.4);border-radius:8px;color:#f0eaff;cursor:pointer;font-size:1rem;padding:.3rem .8rem;font-family:'Rajdhani',sans-serif;font-weight:700;"
          >
            ✕ Close
          </button>
          <p style="position:absolute;bottom:-36px;left:50%;transform:translateX(-50%);color:#8a80aa;font-size:.8rem;font-family:'Rajdhani',sans-serif;font-weight:600;letter-spacing:.1em;white-space:nowrap;">
            Click outside to close
          </p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineProps({ src: { type: String, default: null } })
defineEmits(['close'])
</script>

<style scoped>
.modal-enter-active, .modal-leave-active { transition: opacity .25s ease; }
.modal-enter-from, .modal-leave-to       { opacity: 0; }
</style>
