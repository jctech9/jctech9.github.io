<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

import type { Theme } from '@/composables/useTheme'
import type { NavigationLink } from '@/types/portfolio'

import MobileMenu from './MobileMenu.vue'
import ThemeToggle from './ThemeToggle.vue'

defineProps<{
  links: NavigationLink[]
  activeSection: string
  theme: Theme
}>()

defineEmits<{
  toggleTheme: []
}>()

const menuOpen = ref(false)
const menuButton = ref<HTMLButtonElement | null>(null)

const closeMenu = (): void => {
  menuOpen.value = false
}

const handleEscape = (event: KeyboardEvent): void => {
  if (event.key === 'Escape' && menuOpen.value) {
    closeMenu()
    menuButton.value?.focus()
  }
}

const handleResize = (): void => {
  if (window.innerWidth >= 900) closeMenu()
}

onMounted(() => {
  window.addEventListener('keydown', handleEscape)
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleEscape)
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <header class="app-header" data-testid="app-header">
    <div class="container app-header__inner">
      <a
        class="brand"
        href="#inicio"
        aria-label="JC, Jones Cabral — ir para o início"
        @click="closeMenu"
      >
        <span class="brand__mark" aria-hidden="true">JC</span>
        <span class="brand__name">Jones Cabral</span>
      </a>

      <nav class="desktop-navigation" aria-label="Navegação principal">
        <a
          v-for="link in links"
          :key="link.id"
          class="desktop-navigation__link"
          :class="{ 'is-active': activeSection === link.id }"
          :href="`#${link.id}`"
          :aria-current="activeSection === link.id ? 'page' : undefined"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="app-header__actions">
        <ThemeToggle :theme="theme" @toggle="$emit('toggleTheme')" />
        <button
          ref="menuButton"
          class="icon-button menu-button"
          type="button"
          :aria-expanded="menuOpen"
          aria-controls="mobile-navigation"
          :aria-label="menuOpen ? 'Fechar menu' : 'Abrir menu'"
          data-testid="menu-button"
          @click="menuOpen = !menuOpen"
        >
          <span aria-hidden="true" class="menu-button__lines" :class="{ 'is-open': menuOpen }">
            <span></span><span></span><span></span>
          </span>
        </button>
      </div>
    </div>

    <div class="container">
      <MobileMenu
        :open="menuOpen"
        :links="links"
        :active-section="activeSection"
        @navigate="closeMenu"
      />
    </div>
  </header>
</template>
