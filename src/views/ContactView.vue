<template>
  <div style="padding-top:90px;min-height:100vh;">
    <div style="max-width:900px;margin:0 auto;padding:3rem 1.5rem 6rem;">

      <!-- Header -->
      <div style="text-align:center;margin-bottom:3.5rem;">
        <p class="font-rajdhani"
          style="color:#b04aff;font-size:.85rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;margin-bottom:.5rem;">
          ✦ Get In Touch</p>
        <h1 class="font-cinzel glow-purple"
          style="font-size:clamp(1.6rem,4vw,2.5rem);font-weight:700;margin-bottom:.75rem;">Contact Us</h1>
        <div
          style="width:60px;height:3px;background:linear-gradient(90deg,#b04aff,#00d4ff);border-radius:2px;box-shadow:0 0 12px #b04aff;margin:0 auto 1.25rem;" />
        <p style="color:#8a80aa;font-size:.95rem;">Have a project idea? Let's collaborate and create something magical.
        </p>
      </div>

      <div class="contact-grid">

        <!-- Form -->
        <div class="border-glow" style="background:#0d0d1f;border-radius:20px;padding:2rem;">

          <!-- Success -->
          <div v-if="submitted" style="text-align:center;padding:3rem 1rem;">
            <div style="font-size:3.5rem;margin-bottom:1rem;">✨</div>
            <h3 class="font-cinzel" style="color:#f0eaff;margin-bottom:.75rem;">Message Sent!</h3>
            <p style="color:#8a80aa;line-height:1.7;margin-bottom:1.5rem;">
              Thank you for reaching out! We'll get back to you within 24 hours.
            </p>
            <button class="btn-outline" @click="reset">Send Another</button>
          </div>

          <!-- Form fields -->
          <div v-else>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem;" class="form-row">
              <div>
                <label class="field-label">Name *</label>
                <input v-model="form.name" class="form-input" placeholder="Your name" />
              </div>
              <div>
                <label class="field-label">Email *</label>
                <input v-model="form.email" class="form-input" type="email" placeholder="your@email.com" />
              </div>
            </div>
            <div style="margin-bottom:1rem;">
              <label class="field-label">Subject</label>
              <input v-model="form.subject" class="form-input" placeholder="What's this about?" />
            </div>
            <div style="margin-bottom:1.5rem;">
              <label class="field-label">Message *</label>
              <textarea v-model="form.message" class="form-input" placeholder="Tell us about your project or question…"
                style="resize:vertical;min-height:130px;line-height:1.6;" />
            </div>
            <button class="btn-primary" style="width:100%;justify-content:center;" :disabled="sending" @click="submit">
              <span v-if="sending"
                style="width:16px;height:16px;border:2px solid rgba(255,255,255,.3);border-top-color:white;border-radius:50%;display:inline-block;"
                class="animate-spin-fast" />
              <span v-else>✦</span>
              {{ sending ? 'Sending…' : 'Send Message' }}
            </button>
          </div>
        </div>

        <!-- Info sidebar -->
        <div style="display:flex;flex-direction:column;gap:1.25rem;">
          <div v-for="info in contactInfo" :key="info.label"
            style="background:#0d0d1f;border:1px solid rgba(176,74,255,.15);border-radius:14px;padding:1.2rem;display:flex;align-items:center;gap:1rem;">
            <div
              style="font-size:1.5rem;flex-shrink:0;background:rgba(176,74,255,.1);width:44px;height:44px;border-radius:10px;display:flex;align-items:center;justify-content:center;">
              {{ info.icon }}
            </div>
            <div>
              <div
                style="color:#8a80aa;font-size:.75rem;font-family:'Rajdhani',sans-serif;font-weight:700;letter-spacing:.1em;text-transform:uppercase;">
                {{ info.label }}</div>
              <div style="color:#f0eaff;font-size:.92rem;font-weight:600;margin-top:.1rem;">{{ info.val }}</div>
            </div>
          </div>

          <!-- Social -->
          <div style="background:#0d0d1f;border:1px solid rgba(176,74,255,.15);border-radius:14px;padding:1.2rem;">
            <div
              style="color:#8a80aa;font-size:.75rem;font-family:'Rajdhani',sans-serif;font-weight:700;letter-spacing:.1em;text-transform:uppercase;margin-bottom:1rem;">
              Follow Us
            </div>
            <div style="display:flex;gap:1rem;">
              <a v-for="s in socials" :key="s.label" href="#" :title="s.label"
                :style="`width:42px;height:42px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-family:'Rajdhani',sans-serif;font-size:.75rem;font-weight:800;letter-spacing:.05em;transition:all .25s;text-decoration:none;color:${s.color};background:${s.bg};border:1px solid ${s.border};`">
                {{ s.short }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from 'emailjs-com'

const form = ref({ name: '', email: '', subject: '', message: '' })
const submitted = ref(false)
const sending = ref(false)

async function submit() {
  if (!form.value.name || !form.value.email || !form.value.message) return
  sending.value = true
  await new Promise(r => setTimeout(r, 1500))
  sending.value = false
  submitted.value = true
}

function reset() {
  submitted.value = false
  form.value = { name: '', email: '', subject: '', message: '' }
}

const contactInfo = [
  { icon: '📍', label: 'Location', val: 'Phnom Penh, Cambodia' },
  { icon: '📧', label: 'Email', val: 'hemchanmetrey@gmail.com' },
  { icon: '💬', label: 'Telegram', val: '@hemchanmetrey' },
  { icon: '🕐', label: 'Response Time', val: 'Within 24 hours' }
]

const socials = [
  { short: 'GH', label: 'GitHub', color: '#b04aff', bg: 'rgba(176,74,255,.12)', border: 'rgba(176,74,255,.3)' },
  { short: 'YT', label: 'YouTube', color: '#ff4af0', bg: 'rgba(255,74,240,.12)', border: 'rgba(255,74,240,.3)' },
  { short: 'TG', label: 'Telegram', color: '#00d4ff', bg: 'rgba(0,212,255,.12)', border: 'rgba(0,212,255,.3)' }
]
</script>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2.5rem;
  align-items: start;
}

.field-label {
  display: block;
  color: #8a80aa;
  font-size: .8rem;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  margin-bottom: .4rem;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .form-row {
    grid-template-columns: 1fr !important;
  }
}
</style>
