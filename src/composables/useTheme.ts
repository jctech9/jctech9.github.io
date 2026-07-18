import { onBeforeUnmount, ref } from 'vue'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'jc-theme'

function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getInitialTheme(): Theme {
  const savedTheme = localStorage.getItem(STORAGE_KEY)
  return savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : getSystemTheme()
}

function applyTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme
  document.documentElement.style.colorScheme = theme
}

export function useTheme() {
  const theme = ref<Theme>(getInitialTheme())
  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)')

  applyTheme(theme.value)

  const toggleTheme = (): void => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    localStorage.setItem(STORAGE_KEY, theme.value)
    applyTheme(theme.value)
  }

  const handleSystemChange = (event: MediaQueryListEvent): void => {
    if (localStorage.getItem(STORAGE_KEY) === null) {
      theme.value = event.matches ? 'dark' : 'light'
      applyTheme(theme.value)
    }
  }

  systemPreference.addEventListener('change', handleSystemChange)
  onBeforeUnmount(() => systemPreference.removeEventListener('change', handleSystemChange))

  return { theme, toggleTheme }
}
