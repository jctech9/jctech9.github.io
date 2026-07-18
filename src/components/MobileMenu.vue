<script setup lang="ts">
import type { NavigationLink } from '@/types/portfolio'

defineProps<{
  open: boolean
  links: NavigationLink[]
  activeSection: string
}>()

defineEmits<{
  navigate: []
}>()
</script>

<template>
  <nav
    v-show="open"
    id="mobile-navigation"
    class="mobile-navigation"
    aria-label="Navegação principal móvel"
  >
    <a
      v-for="link in links"
      :key="link.id"
      class="mobile-navigation__link"
      :class="{ 'is-active': activeSection === link.id }"
      :href="`#${link.id}`"
      :aria-current="activeSection === link.id ? 'page' : undefined"
      @click="$emit('navigate')"
    >
      {{ link.label }}
    </a>
  </nav>
</template>
