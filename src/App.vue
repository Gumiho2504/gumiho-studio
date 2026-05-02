<template>
  <div id="app-root">
    <NavBar />
    <main>
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import NavBar    from './components/NavBar.vue'
import AppFooter from './components/AppFooter.vue'
</script>
