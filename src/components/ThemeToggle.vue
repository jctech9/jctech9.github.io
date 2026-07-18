<script setup lang="ts">
import type { Theme } from '@/composables/useTheme'

defineProps<{
  theme: Theme
}>()

defineEmits<{
  toggle: []
}>()
</script>

<template>
  <button
    class="icon-button theme-toggle"
    type="button"
    :aria-label="theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'"
    :title="theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'"
    data-testid="theme-toggle"
    @click="$emit('toggle')"
  >
    <svg v-if="theme === 'dark'" aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
      <circle cx="12" cy="12" r="4" />
      <path
        d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"
      />
    </svg>
    <svg v-else aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
      <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z" />
    </svg>
  </button>
</template>
